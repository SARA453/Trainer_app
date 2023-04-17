import { useContext, useEffect, useState } from "react";
import { QueryContext } from "../context/QueryContext";

const useQuery = (func) => {
  const [data, setData] = useState();

  const { setError, setLoading,error,loading } = useContext(QueryContext);
  const handleGetData = async () => {
    setLoading(true)
    try {
      const data = await func();
      setData(data);
    } catch (error) {
      
      setError(error.response);
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
