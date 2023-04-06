import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMutation from "../hooks/useMutation";
import gym from "../images/gym.png";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const id = useParams();

  const signup = async ({ name, surname, email, password }) => {
    await axios.post(`http://localhost:4000/api/v1/users/classes/${id}`, {
      name,
      surname,
      email,
      password,
    });
  };

  const { mutate } = useMutation(signup, () => {
    navigate("/");
  });

  const onSubmit = async (values) => {
    await mutate(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      navigate(`/class/${id}`);
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
          placeholder="Name"
          className="border rounded py-2 w-6/12 pl-3 mb-5"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          placeholder="Surname"
          className="border rounded py-2 w-6/12 pl-3 mb-5"
          name="surname"
          value={formik.values.surname}
          onChange={formik.handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded py-2 w-6/12 pl-3 mb-5"
          name="email"
          value={formik.values.email}
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
        <button className="border rounded px-4 py-2 bg-red-400 text-white">
          JOIN
        </button>
      </div>
    </form>
  );
};

export default Signup;
