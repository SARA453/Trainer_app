import axios from "axios";
import { useEffect, useState } from "react";
import { axiosInstance } from "../util/axiosInstance";

const useAxios = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
  
    const handleGetData = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get(url);
        setData(data);
      } catch (error) {
        setError(error.data);
      }
      setLoading(false);
    };
  
    useEffect(() => {
      handleGetData();
    }, []);
  
    return { data, error, loading, handleGetData };
}
 
export default useAxios;