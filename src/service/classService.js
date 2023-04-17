import axios from "axios";
import { axiosInstance } from "../util/axiosInstance";

export const getDetail = async (id) => {
  const { data: classDetail } = await axiosInstance.get(
    `/api/v1/classes/${id}`
  );
  console.log(classDetail);

  const trainerId = classDetail.trainerId;
  const { data: trainer } = await axiosInstance.get(
    `/api/v1/trainers/${trainerId}`
  );

  classDetail.trainer = trainer;

  return classDetail;
};

export const addUserToClass = async ({ userId, classId }) => {
  await axiosInstance.post(
    `/api/v1/users/${userId}/classes/${classId}`,
    undefined,

    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};
export const getSingleUser = async ({ userId }) => {
  await axiosInstance.get(`api/v1/users/${userId}`, undefined, {
    headers: {

      Authorization: `Bearer ${(localStorage.getItem("token"))}`,
    },
  });
};
