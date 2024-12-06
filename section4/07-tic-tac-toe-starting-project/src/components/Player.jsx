import {useState} from "react";

export default function Player({initialName, symbol}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setEditing] = useState(false);

    let userName = <span className="player-name">{playerName}</span>;

    function onEdit() {
        setEditing(editing => !editing);
    }

    function savePlayerName(event){
        setPlayerName(event.target.value);
    }

    if(isEditing){
        userName = <input className="player-name" type="text" value={playerName} onChange={savePlayerName}/>;
    }

    return (
        <li>
            <span className="player">
                {userName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={onEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}