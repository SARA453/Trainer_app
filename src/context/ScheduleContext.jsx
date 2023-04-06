import { createContext, useState } from "react";

export const ScheduleContext = createContext();

const Provider = ({ children }) => {
  const [schedule, setSchedule] = useState([]);

  return (
    <ScheduleContext.Provider value={{ schedule, setSchedule }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export default Provider;