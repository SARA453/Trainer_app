import axios from "axios";
import { useParams } from "react-router";
import useMutation from "../hooks/useMutation";
import useQuery from "../hooks/useQuery";
import gym from "../images/gym.png";

const getDetail = async (id) => {
  const { data: classDetail } = await axios.get(
    `http://localhost:4000/api/v1/classes/${id}`
  );
  console.log(classDetail);

  const trainerId = classDetail.trainerId;
  const { data: trainer } = await axios.get(
    `http://localhost:4000/api/v1/trainers/${trainerId}`
  );

  classDetail.trainer = trainer;

  return classDetail;
};

const addUserToClass = async ({ userId, classId }) => {
  await axios.post(
    `http://localhost:4000/api/v1/users/${userId}/classes/${classId}`,
    undefined,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};

const ClassDetails = () => {
  const { id } = useParams();
  const userId = localStorage.getItem("userId");

  const { data: details } = useQuery(() => getDetail(id));

  const { mutate } = useMutation(addUserToClass, () => {
    alert("signup ok");
  });

  const handleAddToClass = async () => {
    if (userId) {
      mutate({ userId, classId: id });
    } else {
      alert("please login");
    }
  };

  const userIsMember = details?.users.find((item) => item.id == userId);

  return (
    <div className="container" style={{ backgroundImage: `url(${gym})` }}>
      <div className="flex flex-col">
        <div className="relative">
          <img src={details?.asset && details?.asset.url} />
          {!userIsMember && (
            <button
              onClick={handleAddToClass}
              className="absolute  top-[74%]  left-[950px] text-2xl bg-white px-7 py-5 rounded-tl-xl rounded-bl-xl w-[170px]"
            >
              Sign up
            </button>
          )}
        </div>

        <div>
          <p className="text-3xl mt-3 text-green-600 ">Schedule</p>
          <div className="flex gap-[90px] ">
            <p className="text-green-600">{details?.classDay}</p>
            <p className="text-green-600">{details?.classTime}</p>
          </div>
        </div>
        <div>
          <p className="mt-5 text-green-600 ">{details?.classDescription}</p>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-3xl mt-12 text-green-600">Trainer</p>

            <img src={details?.trainer.asset.url} className="h-36 w-28 mt-5 " />
            <p className="mt-5 text-green-600">
              {details?.trainer.trainerName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
