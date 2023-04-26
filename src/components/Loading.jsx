import { useContext } from "react";
import { QueryContext } from "../context/QueryContext";

const Loading = () => {
  const { loading } = useContext(QueryContext);

  return (
    <div className="fixed  bh-red">{loading && <div>Loading...</div>}</div>
  );
};

export default Loading;
