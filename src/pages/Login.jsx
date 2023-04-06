import axios from "axios";
import { useFormik } from "formik";
import { useId } from "react";
import { Link, useNavigate } from "react-router-dom";
import useMutation from "../hooks/useMutation";
import gym from "../images/gym.png";

const initialValues = {
  username: "",
  password: "",
};

const login = async ({ username, password }) => {
  const { data } = await axios.post(
    "http://localhost:4000/auth/token",
    {
      username,
      password,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return data;
};

const Login = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation(login, (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.userId);
    navigate("/home");
  });

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      mutate(values);
    },
  });

  return (
    <form
      className="flex flex-col  justify-center items-center h-screen bg-red-200"
      style={{ backgroundImage: `url(${gym})` }}
      onSubmit={formik.handleSubmit}
    >
      <input
        placeholder="Username"
        type="text"
        name="username"
        className="border rounded mx-2 mb-5  pl-3 py-2 w-64"
        onChange={formik.handleChange}
      />

      <input
        placeholder="Password"
        type="password"
        name="password"
        className="border rounded mx-2  mb-5 pl-3 py-2 w-64"
        onChange={formik.handleChange}
      />

      <button
        type="submit"
        className="text-white bg-red-400 rounded px-4 py-2  mb-5"
      >
        Log in
      </button>
    </form>
  );
};

export default Login;
