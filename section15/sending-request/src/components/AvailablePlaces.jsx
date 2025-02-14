import Places from './Places.jsx';
import {useEffect, useState} from "react";
import ErrorPage from './Error.jsx';
import {sortPlacesByDistance} from "../loc.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {

      try {
        setIsFetching(true);
        const response = await fetch('http://localhost:3000/places');
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(resData.places, position.latitude, position.longitude);
          setAvailablePlaces(sortedPlaces);
        });
        setAvailablePlaces(resData.places);
        setIsFetching(false);
      } catch (error) {
        setError({message: error.message || 'Could not fetch places, try again later... '});
        setIsFetching(false);
      }
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorPage title="Error occurs" message={error.message}/>
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading = {isFetching}
      loadingText="Loading..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
