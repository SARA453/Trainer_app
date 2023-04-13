import axios from "axios";

 export const getDetail = async (id) => {
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
  
   export const addUserToClass = async ({ userId, classId }) => {
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