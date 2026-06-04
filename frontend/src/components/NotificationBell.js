import React, {
  useContext,
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  FaBell,
} from "react-icons/fa";

import {
  NotificationContext,
} from "../context/NotificationContext";



function NotificationBell() {

  const {

    notifications,

    removeNotification,

  } = useContext(
    NotificationContext
  );



  const [open, setOpen] =
    useState(false);




  return (

    <div className="relative">

      {/* BELL */}
      <motion.button

        whileTap={{
          scale: 0.9,
        }}

        onClick={() =>
          setOpen(!open)
        }
        className="relative bg-white/10 hover:bg-cyan-500 transition p-4 rounded-2xl"
      >

        <FaBell className="text-2xl text-white" />



        {/* BADGE */}
        {notifications.length >
          0 && (

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">

            {
              notifications.length
            }

          </span>

        )}

      </motion.button>



      {/* PANEL */}
      {open && (

        <motion.div

          initial={{
            opacity: 0,
            y: -10,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          className="absolute right-0 mt-4 w-96 bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-50"
        >

          <div className="p-5 border-b border-white/10">

            <h2 className="text-2xl font-bold text-cyan-400">

              Notifications

            </h2>

          </div>



          {/* LIST */}
          <div className="max-h-[400px] overflow-y-auto">

            {notifications.length ===
            0 ? (

              <p className="p-6 text-slate-400">

                No notifications

              </p>

            ) : (

              notifications.map(
                (
                  notification
                ) => (

                  <div
                    key={
                      notification.id
                    }
                    className="p-5 border-b border-white/5 hover:bg-white/5 transition"
                  >

                    <div className="flex justify-between items-start gap-4">

                      <p className="text-sm leading-relaxed">

                        {
                          notification.message
                        }

                      </p>



                      <button
                        onClick={() =>
                          removeNotification(
                            notification.id
                          )
                        }
                        className="text-red-400 hover:text-red-500"
                      >

                        ✕

                      </button>

                    </div>

                  </div>

                )
              )

            )}

          </div>

        </motion.div>

      )}

    </div>

  );
}

export default NotificationBell;