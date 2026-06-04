import React, { useState } from "react";

import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

import toast from "react-hot-toast";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    name: "",

    email: "",

    password: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(

        "http://localhost:5000/api/users/signup",

        formData

      );

      toast.success(
        "Account Created Successfully"
      );

      navigate("/login");

    } catch (error) {

      console.log(error);

      toast.error("Signup Failed");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-10 rounded-3xl shadow-2xl w-full max-w-md border border-slate-700"
      >

        <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
          Signup
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          className="w-full mb-5 p-4 rounded-2xl bg-slate-800 border border-slate-700 outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          className="w-full mb-5 p-4 rounded-2xl bg-slate-800 border border-slate-700 outline-none"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          className="w-full mb-5 p-4 rounded-2xl bg-slate-800 border border-slate-700 outline-none"
          required
        />

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 transition p-4 rounded-2xl font-semibold"
        >
          Signup
        </button>

        <p className="text-center mt-5 text-slate-400">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-cyan-400"
          >
            Login
          </Link>

        </p>

      </form>

    </div>

  );
}

export default Signup;