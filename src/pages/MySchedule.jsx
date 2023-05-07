import { useParams } from "react-router";
import useQuery from "../hooks/useQuery";
import { getSingleUser } from "../service/classService";

const MySchedule = () => {
  const { id } = useParams();
  const { data: details } = useQuery(() => getSingleUser(id));
  return (
    <div className="flex flex-col items-center justify-center">
      <button className="text-5xl m-10" onClick={getSingleUser}>
        My Schedule
      </button>
      <table>
        <thead>
          <tr className="flex gap-7 items-center justify-center">
            <th>#</th>
            <th>Title</th>
            <th>Day</th>
            <th>Time</th>
          </tr>
        </thead>

        {details?.classes?.map((item, index) => (
          <tbody>
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.className}</td>
              <td>{item.classDay}</td>
              <td>{item.classTime}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MySchedule;
