import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaBus,
  FaRoute,
  FaClock,
  FaShieldAlt,
  FaQrcode,
  FaCloud,
} from "react-icons/fa";
import toast from "react-hot-toast";

function ApplyPass() {
  const [formData, setFormData] = useState({
    route: "",
    duration: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/passes/apply",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Pass Applied Successfully");

      setFormData({
        route: "",
        duration: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Application Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#083344)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating Circles */}

      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "#06b6d4",
          borderRadius: "50%",
          filter: "blur(180px)",
          top: "-100px",
          left: "-100px",
          opacity: 0.3,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "#3b82f6",
          borderRadius: "50%",
          filter: "blur(160px)",
          bottom: "-100px",
          right: "-100px",
          opacity: 0.3,
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        style={{
          width: "100%",
          maxWidth: "850px",
          background:
            "rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "35px",
          padding: "45px",
          color: "white",
          boxShadow:
            "0 0 40px rgba(6,182,212,0.25)",
          zIndex: 10,
        }}
      >
        {/* Header */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              margin: "auto",
              borderRadius: "50%",
              background:
                "rgba(6,182,212,0.15)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaBus
              size={50}
              color="#22d3ee"
            />
          </div>

          <h1
            style={{
              fontSize: "42px",
              marginTop: "20px",
            }}
          >
            Apply Smart Pass
          </h1>

          <p
            style={{
              color: "#cbd5e1",
            }}
          >
            Digital Bus Pass Management System
          </p>
        </div>

        {/* Stats */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: "15px",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              background:
                "rgba(255,255,255,0.05)",
              padding: "20px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <FaQrcode
              size={30}
              color="#22d3ee"
            />
            <h3>QR Enabled</h3>
          </div>

          <div
            style={{
              background:
                "rgba(255,255,255,0.05)",
              padding: "20px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <FaCloud
              size={30}
              color="#22d3ee"
            />
            <h3>Cloud Storage</h3>
          </div>

          <div
            style={{
              background:
                "rgba(255,255,255,0.05)",
              padding: "20px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <FaShieldAlt
              size={30}
              color="#22d3ee"
            />
            <h3>Secure Access</h3>
          </div>
        </div>

        {/* FORM */}

        <form onSubmit={handleSubmit}>
          <label>
            <FaRoute /> Route
          </label>

          <select
            name="route"
            value={formData.route}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "16px",
              marginTop: "10px",
              marginBottom: "25px",
              borderRadius: "15px",
              background: "#0f172a",
              color: "white",
              border:
                "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <option value="">
              Select Route
            </option>

            <option>
              Vijayawada → Guntur
            </option>

            <option>
              Vijayawada → Tenali
            </option>

            <option>
              Vijayawada → Hyderabad
            </option>

            <option>
              Guntur → Amaravati
            </option>
          </select>

          <label>
            <FaClock /> Duration
          </label>

          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "16px",
              marginTop: "10px",
              marginBottom: "30px",
              borderRadius: "15px",
              background: "#0f172a",
              color: "white",
              border:
                "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <option value="">
              Select Duration
            </option>

            <option>1 Month</option>
            <option>3 Months</option>
            <option>6 Months</option>
            <option>1 Year</option>
          </select>

          {/* Preview */}

          {(formData.route ||
            formData.duration) && (
            <div
              style={{
                background:
                  "rgba(6,182,212,0.12)",
                padding: "20px",
                borderRadius: "20px",
                marginBottom: "25px",
              }}
            >
              <h3>
                Smart Pass Preview
              </h3>

              <p>
                Route:
                {" "}
                {formData.route ||
                  "Not Selected"}
              </p>

              <p>
                Duration:
                {" "}
                {formData.duration ||
                  "Not Selected"}
              </p>
            </div>
          )}

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "18px",
              border: "none",
              borderRadius: "18px",
              fontSize: "18px",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
              background:
                "linear-gradient(135deg,#06b6d4,#2563eb)",
              boxShadow:
                "0 0 25px rgba(6,182,212,0.4)",
            }}
          >
            {loading
              ? "Applying..."
              : "Apply Smart Pass"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default ApplyPass;