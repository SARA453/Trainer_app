/*
import axios from "axios";
import { useContext, useState } from "react";
import { ScheduleContext } from "../context/ScheduleContext";
import useQuery from "../hooks/useQuery";

const getClassDetail = async (id) => {
  const { data } = await axios.get(
    `http://localhost:4000/api/v1/classes/${id}`
  );
};


const getClassDetailList = async (ids) => {
  const list = [];
  for (id of ids) {
    let data = await getClassDetail(id);
    list.push(data);
  }
  return list;
};

const MySchedule = () => {
  const { schedule } = useContext(ScheduleContext);

  const { data: details } = useQuery(() => getClassDetailList(schedule));

  return (
    <div>
      <p className="text-5xl mb-10">My Schedule</p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {details.map((item, index) => (
          <tbody>
            <tr key={item.id}>
              <td>{item.className}</td>
              <td>{item.classTime}</td>
              <td>{item.classDay}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MySchedule;
*/
