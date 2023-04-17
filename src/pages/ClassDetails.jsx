
import { useParams, navigate, useNavigate } from "react-router";
import useMutation from "../hooks/useMutation";
import useQuery from "../hooks/useQuery";
import { getDetail, addUserToClass } from "../service/classService";

const ClassDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const userId = localStorage.getItem("userId");

  const { data: details } = useQuery(() => getDetail(id));

  const { mutate } = useMutation(addUserToClass, () => {
    alert("signup ok");
    navigate("/myschedule")
  });

  const handleAddToClass = async () => {
    if (userId) {
      mutate({ userId, classId: id });
    } else {
      navigate("login");
    }
  };

  const userIsMember = details?.users.find((item) => item.id == userId);

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <img src={details?.asset && details?.asset.url} />
          {!userIsMember && (
            <button
              onClick={handleAddToClass}
              className="absolute  top-[74%] right-0 left-[950px] text-2xl  bg-green-600 text-white px-7 py-5 rounded-tl-xl rounded-bl-xl w-[170px] font-['Roboto-Regular']"
            >
              Sign up
            </button>
          )}
        </div>

        <div>
          <p className="text-3xl mt-3 text-green-600 font-['Roboto-Regular']">Schedule</p>
          <div className="flex gap-[90px] ">
            <p className="text-green-600 font-['Roboto-Regular']">{details?.classDay}</p>
            <p className="text-green-600 font-['Roboto-Regular']">{details?.classTime}</p>
          </div>
        </div>
        <div>
          <p className="mt-5 text-green-600 font-['Roboto-Regular'] ">{details?.classDescription}</p>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-3xl mt-12 text-green-600 font-['Roboto-Regular']">Trainer</p>

            <img src={details?.trainer.asset.url} className="h-36 w-28 mt-5 " />
            <p className="mt-5 text-green-600 font-['Roboto-Regular']">
              {details?.trainer.trainerName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
