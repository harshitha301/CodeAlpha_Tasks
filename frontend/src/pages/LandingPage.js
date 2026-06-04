import React from "react";

import {
  Link,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import {
  FaBus,
  FaShieldAlt,
  FaQrcode,
  FaChartPie,
  FaBell,
  FaCloud,
} from "react-icons/fa";



function LandingPage() {

  const features = [

    {
      icon: <FaQrcode />,
      title: "Smart QR Pass",
      desc:
        "Digital QR-based transport passes for fast verification.",
    },

    {
      icon: <FaBell />,
      title: "Live Notifications",
      desc:
        "Receive real-time approval and rejection alerts instantly.",
    },

    {
      icon: <FaChartPie />,
      title: "Analytics Dashboard",
      desc:
        "Track pass analytics with modern visual dashboards.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Secure Authentication",
      desc:
        "Protected login system with secure user access.",
    },

    {
      icon: <FaCloud />,
      title: "Cloud Ready",
      desc:
        "Built for scalable cloud deployment and enterprise usage.",
    },

    {
      icon: <FaBus />,
      title: "Smart Transport",
      desc:
        "Modern smart transport management platform.",
    },

  ];



  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-white/10 backdrop-blur-xl">

        {/* LOGO */}
        <motion.div

          initial={{
            opacity: 0,
            x: -40,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          className="flex items-center gap-4"
        >

          <div className="bg-cyan-500/20 p-4 rounded-2xl">

            <FaBus className="text-3xl text-cyan-400" />

          </div>



          <h1 className="text-3xl font-extrabold text-cyan-400">

            SmartPassCloud

          </h1>

        </motion.div>



        {/* BUTTONS */}
        <motion.div

          initial={{
            opacity: 0,
            x: 40,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          className="flex gap-4"
        >

          <Link
            to="/login"
            className="px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
          >

            Login

          </Link>



          <Link
            to="/register"
            className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-600 transition font-bold"
          >

            Get Started

          </Link>

        </motion.div>

      </nav>



      {/* HERO */}
      <section className="px-10 py-24">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div

            initial={{
              opacity: 0,
              y: 40,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}
          >

            <div className="inline-block bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 rounded-full text-cyan-400 mb-8">

              AI Smart Transport Platform

            </div>



            <h1 className="text-6xl xl:text-7xl font-extrabold leading-tight mb-8">

              Digital Bus Pass
              <span className="text-cyan-400">
                {" "}
                Management
              </span>

            </h1>



            <p className="text-slate-400 text-xl leading-relaxed mb-10">

              SmartPassCloud helps students and transport departments manage digital bus passes with QR verification, analytics, notifications, and enterprise-grade security.

            </p>



            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <Link
                to="/register"
                className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-5 rounded-2xl font-bold text-lg"
              >

                Start Now

              </Link>



              <Link
                to="/login"
                className="bg-white/5 hover:bg-white/10 border border-white/10 transition px-8 py-5 rounded-2xl font-bold text-lg"
              >

                Explore Platform

              </Link>

            </div>

          </motion.div>



          {/* RIGHT */}
          <motion.div

            initial={{
              opacity: 0,
              scale: 0.8,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            className="relative"
          >

            <div className="absolute inset-0 bg-cyan-500 blur-[120px] opacity-20 rounded-full"></div>



            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-2xl">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-6">

                  <FaBus className="text-5xl text-cyan-400 mb-4" />

                  <h2 className="text-4xl font-bold mb-2">

                    10K+

                  </h2>

                  <p className="text-slate-400">

                    Passes Generated

                  </p>

                </div>



                <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-6">

                  <FaShieldAlt className="text-5xl text-green-400 mb-4" />

                  <h2 className="text-4xl font-bold mb-2">

                    99%

                  </h2>

                  <p className="text-slate-400">

                    Secure Access

                  </p>

                </div>



                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6">

                  <FaBell className="text-5xl text-yellow-400 mb-4" />

                  <h2 className="text-4xl font-bold mb-2">

                    Live

                  </h2>

                  <p className="text-slate-400">

                    Notifications

                  </p>

                </div>



                <div className="bg-purple-500/10 border border-purple-500/20 rounded-3xl p-6">

                  <FaChartPie className="text-5xl text-purple-400 mb-4" />

                  <h2 className="text-4xl font-bold mb-2">

                    AI

                  </h2>

                  <p className="text-slate-400">

                    Analytics

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>



      {/* FEATURES */}
      <section className="px-10 pb-24">

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}
        >

          <h2 className="text-5xl font-extrabold text-center mb-5">

            Powerful Features

          </h2>



          <p className="text-slate-400 text-center text-xl mb-16">

            Everything needed for smart digital transport management

          </p>

        </motion.div>



        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {features.map(
            (
              feature,
              index
            ) => (

              <motion.div

                key={index}

                whileHover={{
                  scale: 1.03,
                }}

                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl"
              >

                <div className="text-5xl text-cyan-400 mb-6">

                  {feature.icon}

                </div>



                <h3 className="text-2xl font-bold mb-4">

                  {feature.title}

                </h3>



                <p className="text-slate-400 leading-relaxed">

                  {feature.desc}

                </p>

              </motion.div>

            )
          )}

        </div>

      </section>



      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-400">

        © 2026 SmartPassCloud • AI Smart Transport Management System

      </footer>

    </div>

  );
}

export default LandingPage;