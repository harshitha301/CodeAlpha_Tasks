import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  FaBus,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

function Dashboard() {
  const [name, setName] = useState("");
  const [route, setRoute] = useState("");
  const [email, setEmail] = useState("");
  const [duration, setDuration] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("route", route);
      formData.append("duration", duration);

      if (photo) {
        formData.append("photo", photo);
      }

      const response = await fetch(
        "http://localhost:5000/api/passes/apply",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const data = await response.json();

      alert(
        `Application Submitted Successfully!\nPass ID: ${data.id}`
      );

      setName("");
      setEmail("");
      setRoute("");
      setDuration("");
      setPhoto(null);
    } catch (error) {
      console.error(error);
      alert("Failed to submit application");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white relative overflow-hidden">

      {/* BACKGROUND EFFECTS */}

      <div className="fixed top-10 left-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="fixed bottom-10 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto p-8 relative z-10">

  <Navbar />

  {/* HERO */}

  <div className="text-center mb-12">

          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            SmartPassCloud
          </h1>
          <button
  onClick={() => {
    window.location.href = "/";
  }}
  className="px-5 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition"
>
  Logout
</button>

          <p className="text-slate-400 mt-4 text-lg">
            Digital Bus Pass Management System
          </p>

          <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            🚍 Smart Travel • QR Enabled • Fast Approval
          </div>

        </div>

        {/* WELCOME CARD */}

        <div className="mb-10">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-3">
              Welcome Back 👋
            </h2>

            <p className="text-slate-300 text-lg">
              Apply for new bus passes, manage your travel details,
              and access your SmartPass digitally anytime.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">

              <div className="px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                🚍 Digital Pass
              </div>

              <div className="px-5 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                📱 QR Enabled
              </div>

              <div className="px-5 py-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                ⚡ Instant Access
              </div>

            </div>

          </div>

        </div>

        {/* MAIN SECTION */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* PASS PREVIEW */}

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10">

            <h3 className="text-2xl font-semibold mb-5">
              Digital Pass Preview
            </h3>

            <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8">

              <div className="flex justify-between items-center">

                <h4 className="font-bold text-2xl">
                  SmartPass
                </h4>

                <FaBus size={32} />

              </div>

              <div className="mt-10">

                <p className="text-sm opacity-80">
                  Passenger
                </p>

                <h2 className="text-3xl font-bold">
                  {name || "Passenger Name"}
                </h2>

              </div>

              <div className="mt-6">

                <p className="text-sm opacity-80">
                  Route
                </p>

                <h2 className="text-xl">
                  {route || "Select Route"}
                </h2>

              </div>

              <div className="mt-6">

                <p className="text-sm opacity-80">
                  Duration
                </p>

                <h2>
                  {duration || "30 Days"}
                </h2>

              </div>

              <div className="mt-8 bg-white text-black rounded-2xl p-6 text-center font-bold">
                QR CODE
              </div>

            </div>

            <div className="mt-6">

              <div className="flex items-center gap-3 text-green-400">
                <FaCheckCircle />
                Ready For Verification
              </div>

              <div className="flex items-center gap-3 text-yellow-400 mt-3">
                <FaClock />
                Fast Approval Process
              </div>

            </div>

          </div>

          {/* FORM */}

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">

            <h3 className="text-2xl font-bold mb-6">
              Apply For New Bus Pass
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-500"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-500"
                required
              />

              <input
                type="text"
                placeholder="Bus Route"
                value={route}
                onChange={(e) =>
                  setRoute(e.target.value)
                }
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-500"
                required
              />

              <select
                value={duration}
                onChange={(e) =>
                  setDuration(e.target.value)
                }
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
                required
              >
                <option value="">
                  Select Duration
                </option>

                <option value="30 Days">
                  30 Days
                </option>

                <option value="60 Days">
                  60 Days
                </option>

                <option value="90 Days">
                  90 Days
                </option>

                <option value="180 Days">
                  180 Days
                </option>
              </select>

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setPhoto(e.target.files[0])
                }
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              />

              {photo && (
                <div className="flex justify-center">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="preview"
                    className="w-32 h-32 rounded-full object-cover border-4 border-cyan-500"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:scale-[1.02] transition-all duration-300"
              >
                Submit Application
              </button>
              <Link
  to="/mypasses"
  className="block text-center w-full p-4 rounded-xl bg-purple-600 font-bold hover:bg-purple-700 transition-all duration-300 mt-4"
>
  View My Passes
</Link>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;