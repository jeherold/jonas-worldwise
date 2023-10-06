import { createContext, useContext, useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:9000';

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert('There was an error fetching data...');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert('There was an error fetching data...');
    } finally {
      setIsLoading(false);
    }
  }

  /** Specify options object since this will be a POST - mutate the remote/server state (db) */
  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      /** check the result of the POST */
      console.log(data);
      /** Mutate the UI state to be in sync without needing to refetch the data
       *  - will do this later with react queries
       *  but for this small app and demo this will work to keep data in sync */
      setCities((cities) => [...cities, data]);
    } catch {
      alert('There was an error creating new city...');
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      /** dont need to store the res of a DELETE */
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });
      /** Update the UI state to reflect the DELETE */
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch {
      alert('There was an error deleting city...');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

/** Custom hook for the consumers */
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error('useCities used out of scope');
  }
  return context;
}

export { CitiesProvider, useCities };
