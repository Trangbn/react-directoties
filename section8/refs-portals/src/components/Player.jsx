import {useState, useRef} from 'react';

export default function Player() {

    const [enteredName, setEnteredName] = useState();
    const playerName = useRef();

    function handleClick() {
        setEnteredName(playerName.current.value);
    }

  return (
    <section id="player">
      <h2>Welcome {enteredName ? enteredName : "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set name</button>
      </p>
    </section>
  );
}
