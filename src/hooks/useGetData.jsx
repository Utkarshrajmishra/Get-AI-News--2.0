import { useState } from "react";

const useGetData = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_FEED_URL);
      const jsonData = await response.json();
      setData(jsonData);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { error, isLoading, data, getData };
};

export default useGetData;
