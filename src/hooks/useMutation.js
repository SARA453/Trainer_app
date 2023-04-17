import { useContext, useState } from "react";
import { QueryContext } from "../context/QueryContext";

const useMutation = (func, onSuccess) => {
  const [data, setData] = useState([]);
  const { setError, setLoading, error,loading } = useContext(QueryContext);

  const mutate = async (body) => {
    setLoading(true);
    try {
      let data = await func(body);
      setData(data);
      onSuccess(data);
    } catch (error) {
      console.log(error.response)
      setError(error.response);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, mutate };
};

export default useMutation;
