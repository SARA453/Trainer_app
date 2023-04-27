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
    navigate("/myschedule");
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
    <div className="container mx-auto">
      <div className=" bg-red-200 flex flex-col items-center justify-center mt-14">
        <div className="relative">
          <img src={details?.asset && details?.asset.url} className="mt-14" />
          {!userIsMember && (
            <button
              onClick={handleAddToClass}
              className="absolute  top-[74%]  text-2xl  bg-green-400 hover:bg-green-500 text-white px-4 h-10 flex justify-center rounded-r-sm   font-['Roboto-Regular']"
            >
              Sign up
            </button>
          )}
        </div>

        <div>
          <p className="text-3xl mt-3 text-green-400 font-['Roboto-Regular']">
            Schedule
          </p>
          <div className="flex gap-[90px] ">
            <p className="text-green-400 font-['Roboto-Regular']">
              {details?.classDay}
            </p>
            <p className="text-green-400 font-['Roboto-Regular']">
              {details?.classTime}
            </p>
          </div>
        </div>
        <div>
          <p className="mt-5 text-green-400 font-['Roboto-Regular'] ">
            {details?.classDescription}
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-3xl mt-12 text-green-400 font-['Roboto-Regular']">
              Trainer
            </p>

            <img src={details?.trainer.asset.url} className="h-36 w-28 mt-5 " />
            <p className="my-7 text-green-400 font-['Roboto-Regular']">
              {details?.trainer.trainerName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
