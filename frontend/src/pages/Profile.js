import React, {
  useEffect,
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  FaUserCircle,
} from "react-icons/fa";

import toast from "react-hot-toast";



function Profile() {

  const [user, setUser] =
    useState({

      name: "",
      email: "",

    });



  useEffect(() => {

    const savedUser =
      JSON.parse(

        localStorage.getItem(
          "user"
        )

      );



    if (savedUser) {

      setUser(savedUser);

    }

  }, []);




  const handleChange = (e) => {

    setUser({

      ...user,

      [e.target.name]:
        e.target.value,

    });

  };



  const saveProfile = () => {

    localStorage.setItem(

      "user",

      JSON.stringify(user)

    );



    toast.success(
      "Profile Updated"
    );

  };



  return (

    <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center p-6">

      <motion.div

        initial={{
          opacity: 0,
          scale: 0.9,
        }}

        animate={{
          opacity: 1,
          scale: 1,
        }}

        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 w-full max-w-2xl shadow-2xl"
      >

        {/* PROFILE ICON */}
        <div className="flex justify-center mb-8">

          <FaUserCircle className="text-8xl text-cyan-400" />

        </div>



        {/* TITLE */}
        <h1 className="text-5xl font-bold text-center text-cyan-400 mb-10">

          My Profile

        </h1>



        {/* FORM */}
        <div className="space-y-6">

          {/* NAME */}
          <div>

            <label className="block mb-2 text-slate-400">

              Full Name

            </label>

            <input
              type="text"
              name="name"
              value={user.name}
              onChange={
                handleChange
              }
              placeholder="Enter your name"
              className="w-full bg-slate-900 text-white p-4 rounded-2xl outline-none"
            />

          </div>



          {/* EMAIL */}
          <div>

            <label className="block mb-2 text-slate-400">

              Email Address

            </label>

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={
                handleChange
              }
              placeholder="Enter your email"
              className="w-full bg-slate-900 text-white p-4 rounded-2xl outline-none"
            />

          </div>



          {/* BUTTON */}
          <button
            onClick={saveProfile}
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition p-4 rounded-2xl font-bold text-lg"
          >

            Save Changes

          </button>

        </div>

      </motion.div>

    </div>

  );
}

export default Profile;