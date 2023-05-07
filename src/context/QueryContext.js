import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

export const QueryContext = createContext();

const QueryProvider = ({ children }) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error) {
      if (error?.status === 500) {
        toast.error("wrong username or password");
      } else {
        toast.error(error.data.message);
      }
    }
  }, [error]);
  return (
    <QueryContext.Provider value={{ error, setError, loading, setLoading }}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryProvider;
