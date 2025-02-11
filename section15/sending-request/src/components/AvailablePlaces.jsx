import Places from './Places.jsx';
import {useState} from "react";

export default function AvailablePlaces({ onSelectPlace }) {

  const [availablePlaces, setAvailablePlaces] = useState([]);

  const response = fetch('http://3000/localhost/places').then(response => response.json());

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
