import React from "react";

import {
  motion,
} from "framer-motion";



function StatsCard({

  title,

  value,

  icon,

  color,

}) {

  return (

    <motion.div

      whileHover={{
        scale: 1.03,
      }}

      className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
    >

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-400 text-lg mb-3">

            {title}

          </p>



          <h2 className="text-5xl font-extrabold">

            {value}

          </h2>

        </div>



        <div
          className={`${color} p-5 rounded-3xl text-4xl`}
        >

          {icon}

        </div>

      </div>

    </motion.div>

  );
}

export default StatsCard;