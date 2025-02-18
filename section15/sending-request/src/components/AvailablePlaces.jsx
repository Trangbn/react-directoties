import Places from './Places.jsx';
import {useEffect, useState} from "react";
import ErrorPage from './Error.jsx';
import {sortPlacesByDistance} from "../loc.js";
import {fetchAvailablePlaces} from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {

      setIsFetching(true);

      try {
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places, position.latitude, position.longitude);
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
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
