import React, {
  useState,
  useContext,
} from "react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import {
  FaHome,
  FaBus,
  FaUser,
  FaPlusCircle,
  FaSignOutAlt,
  FaBars,
  FaMoon,
  FaSun,
  FaUserShield,
} from "react-icons/fa";

import NotificationBell from "./NotificationBell";

import {
  ThemeContext,
} from "../context/ThemeContext";



function Sidebar() {

  const navigate =
    useNavigate();

  const location =
    useLocation();



  const [collapsed, setCollapsed] =
    useState(false);



  const {
    darkMode,
    toggleTheme,
  } = useContext(
    ThemeContext
  );



  const logout = () => {

    localStorage.removeItem(
      "token"
    );



    navigate("/");

  };



  const menuItems = [

    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
    },

    {
      name: "Apply Pass",
      icon: <FaPlusCircle />,
      path: "/apply",
    },

    {
      name: "My Passes",
      icon: <FaBus />,
      path: "/mypasses",
    },

    {
      name: "Profile",
      icon: <FaUser />,
      path: "/profile",
    },

    {
      name: "Admin Panel",
      icon: <FaUserShield />,
      path: "/admin",
    },

  ];



  return (

    <motion.div

      animate={{
        width: collapsed
          ? "100px"
          : "300px",
      }}

      className="min-h-screen bg-black/30 backdrop-blur-2xl border-r border-white/10 text-white p-6 flex flex-col shadow-2xl"
    >

      {/* TOP */}
      <div className="flex items-center justify-between mb-10">

        {!collapsed && (

          <motion.h1

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            className="text-3xl font-extrabold text-cyan-400"
          >

            SmartPassCloud

          </motion.h1>

        )}



        {/* TOGGLE */}
        <button
          onClick={() =>
            setCollapsed(
              !collapsed
            )
          }
          className="bg-white/10 hover:bg-cyan-500 transition p-4 rounded-2xl"
        >

          <FaBars />

        </button>

      </div>



      {/* NOTIFICATION */}
      <div className="mb-10 flex justify-center">

        <NotificationBell />

      </div>



      {/* MENU */}
      <div className="flex flex-col gap-5 flex-1">

        {menuItems.map(
          (item, index) => (

            <Link
              key={index}
              to={item.path}
            >

              <motion.div

                whileHover={{
                  scale: 1.03,
                }}

                className={`flex items-center gap-5 p-5 rounded-2xl transition-all ${
                  location.pathname ===
                  item.path

                    ? "bg-cyan-500 text-white shadow-lg"

                    : "bg-white/5 hover:bg-white/10"
                }`}
              >

                <div className="text-2xl">

                  {item.icon}

                </div>



                {!collapsed && (

                  <span className="text-lg font-semibold">

                    {item.name}

                  </span>

                )}

              </motion.div>

            </Link>

          )
        )}

      </div>



      {/* BOTTOM */}
      <div className="space-y-5">

        {/* THEME */}
        <button
          onClick={toggleTheme}
          className="w-full flex items-center gap-5 bg-yellow-500 hover:bg-yellow-600 transition p-5 rounded-2xl"
        >

          <div className="text-2xl">

            {darkMode ? (
              <FaSun />
            ) : (
              <FaMoon />
            )}

          </div>



          {!collapsed && (

            <span className="font-bold text-lg">

              {darkMode
                ? "Light Mode"
                : "Dark Mode"}

            </span>

          )}

        </button>



        {/* LOGOUT */}
        <button
          onClick={logout}
          className="w-full flex items-center gap-5 bg-red-500 hover:bg-red-600 transition p-5 rounded-2xl"
        >

          <div className="text-2xl">

            <FaSignOutAlt />

          </div>



          {!collapsed && (

            <span className="font-bold text-lg">

              Logout

            </span>

          )}

        </button>

      </div>

    </motion.div>

  );
}

export default Sidebar;