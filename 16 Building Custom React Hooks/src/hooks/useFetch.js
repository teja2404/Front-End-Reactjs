import { useEffect, useState } from "react";

export function useFetch(fetchFnc, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFnc();
        setFetchedData(places);
        setIsFetching(false);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch data ",
        });
        setIsFetching(false);
      }
    }
    fetchData();
  }, [fetchFnc]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error,
  };
}
