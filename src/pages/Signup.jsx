import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMutation from "../hooks/useMutation";
import gym from "../images/gym.png";
import { useFormik } from "formik";

const initialValues = {
  username: "",
  password: "",
  repeatedPassword: "",
};

const signup = async ({ username, password }) => {
  await axios.post(`http://localhost:4000/api/v1/users/`, {
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
    <form onSubmit={formik.handleSubmit}>
      <div
        className="flex flex-col items-center justify-center h-screen"
        style={{ backgroundImage: `url(${gym})` }}
      >
        <p className="mb-5 text-bold text-white">JOIN TO THE CLASS</p>

        <input
          type="text"
          placeholder="Username"
          className="border rounded py-2 w-6/12 pl-3 mb-5"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          className="border rounded py-2 w-6/12 pl-3 mb-5"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <input
          type="password"
          placeholder="Re-password"
          className="border rounded py-2 w-6/12 pl-3 mb-5"
          name="repeatedPassword"
          value={formik.values.repeatedPassword}
          onChange={formik.handleChange}
        />
        <button className="border rounded px-4 py-2 bg-red-400 text-white">
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Signup;
