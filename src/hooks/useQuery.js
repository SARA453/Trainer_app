import { useEffect, useState } from "react";

const useQuery = (func) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const handleGetData = async () => {
    try {
      const data = await func();
      setData(data);
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return { data, error, loading, handleGetData };
};

export default useQuery;
