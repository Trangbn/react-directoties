import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from 'react';
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from './winning-combination.js';
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

function deriveActivePLayer(gameTurns){

    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function App() {
    const [players, setPlayers] = useState({
        X: 'Player 1',
        O: 'Player 2'
    });
    const [gameTurns, setGameTurns] = useState([]);
    let currentPlayer =  deriveActivePLayer(gameTurns);

    // Set game board
    let gameBoard = [...initialGameBoard.map(array => [...array])];
    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }

    let winner = null;

    for(const combination of WINNING_COMBINATIONS){
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = firstSquareSymbol;
        }
    }

    let hasDraw = !winner && gameTurns.length === 9;

    function handleSelectedSquare(rowIndex, colIndex){
        setGameTurns(prevTurns => {
            let currentPlayer = deriveActivePLayer(gameTurns);
            return [{square:{row:  rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];
        });
    }

    function handleRematch(){
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName){
        setPlayers(prevState => {
            return {
                ...prevState,
                [symbol]: newName
            }
        })
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className='highlight-player'>
                    <Player initialName="Player 1" symbol="X" isActive={currentPlayer === 'X'}/>
                    <Player initialName="Player 2" symbol="O" isActive={currentPlayer === 'O'}/>
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onSelectRestart={handleRematch}/>}
                <GameBoard onSelectSquare ={handleSelectedSquare} board={gameBoard} />
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}

export default App
