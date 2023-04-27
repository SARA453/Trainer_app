import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMutation from "../hooks/useMutation";
import gym from "../assets/images/gym.png";
import { useFormik } from "formik";
import { axiosInstance } from "../util/axiosInstance";
import { Link } from "react-router-dom";
import login from "../assets/images/login.jpeg"

const initialValues = {
  username: "",
  password: "",
  repeatedPassword: "",
};

const signup = async ({ username, password }) => {
  await axiosInstance.post(`/api/v1/users/`, {
    username,
    password,
  });
};

const Signup = () => {
  const navigate = useNavigate();
  const id = useParams();

  const { mutate } = useMutation(signup, () => {
    navigate("/login");
  });

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const { username, repeatedPassword, password } = values;
      if (repeatedPassword === password) mutate({ username, password });
    },
  });
  return (
    <div className="container mx-auto  grid grid-cols-1  md:grid-cols-2  md:gap-7  md:mt-14">
       <div>
        <img src={login} className="w-full h-full mt-5 md:mt-0" />
       </div>
      <div className=" w-full  h-full bg-red-200 ">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col items-center justify-center ">
            <p className="mb-14 text-bold mt-7 ">JOIN TO THE CLASS</p>

            <input
              type="text"
              placeholder="Username"
              className="border rounded-sm py-2  pl-3 mb-5 w-2/4"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />

            <input
              type="password"
              placeholder="Password"
              className="border rounded-sm py-2 pl-3 mb-5 w-2/4"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <input
              type="password"
              placeholder="Re-password"
              className="border rounded-sm py-2  pl-3 mb-5 w-2/4"
              name="repeatedPassword"
              value={formik.values.repeatedPassword}
              onChange={formik.handleChange}
            />
            <button className="border rounded-sm px-4 py-2 bg-red-200 hover:bg-red-300 text-white w-2/4 ">
              Sign up
            </button>
            <p className="mt-7 mb-14">
              Already have an account?{" "}
              <Link to={"/login"} className="text-green-400 ">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
     
    </div>
  );
};

export default Signup;
