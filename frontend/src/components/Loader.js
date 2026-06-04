import React from "react";

import {
  motion,
} from "framer-motion";

import {
  FaBus,
} from "react-icons/fa";



function Loader() {

  return (

    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">

      <motion.div

        animate={{
          rotate: 360,
        }}

        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      >

        <FaBus className="text-7xl text-cyan-400" />

      </motion.div>

    </div>

  );
}

export default Loader;