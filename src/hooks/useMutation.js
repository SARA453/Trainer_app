import { useState } from "react";

const useMutation = (func, onSuccess) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const mutate = async (body) => {
    try {
      let data = await func(body);
      setData(data);
      onSuccess(data);
    } catch (error) {
      setError(error.respose.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, mutate };
};

export default useMutation;
