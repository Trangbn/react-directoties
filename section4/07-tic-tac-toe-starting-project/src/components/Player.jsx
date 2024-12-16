import {useState} from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setEditing] = useState(false);

    let userName = <span className="player-name">{playerName}</span>;

    function onEdit() {
        setEditing(editing => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function savePlayerName(event){
        setPlayerName(event.target.value);
    }

    if(isEditing){
        userName = <input className="player-name" type="text" value={playerName} onChange={savePlayerName}/>;
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {userName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={onEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}
