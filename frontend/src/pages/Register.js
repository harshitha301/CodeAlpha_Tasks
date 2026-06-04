import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      alert("Registration Successful");

      window.location.href = "/";
    } catch (error) {
      console.log(error);

      alert("Registration Failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#1e3a8a,#312e81)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow Effect 1 */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "#06b6d4",
          filter: "blur(120px)",
          top: "-80px",
          left: "-80px",
          opacity: 0.4,
        }}
      />

      {/* Glow Effect 2 */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "#8b5cf6",
          filter: "blur(120px)",
          bottom: "-100px",
          right: "-100px",
          opacity: 0.4,
        }}
      />

      <form
        onSubmit={handleRegister}
        style={{
          width: "450px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          padding: "45px",
          borderRadius: "30px",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
          zIndex: 10,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "70px",
              marginBottom: "10px",
            }}
          >
            🎟️
          </div>

          <h1
            style={{
              color: "white",
              fontSize: "38px",
              marginBottom: "5px",
            }}
          >
            Create Account
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              marginBottom: "35px",
            }}
          >
            Join SmartPassCloud Today
          </p>
        </div>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={{
            width: "100%",
            padding: "16px",
            marginBottom: "20px",
            borderRadius: "15px",
            border: "none",
            outline: "none",
            background: "rgba(255,255,255,0.95)",
            fontSize: "15px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            width: "100%",
            padding: "16px",
            marginBottom: "20px",
            borderRadius: "15px",
            border: "none",
            outline: "none",
            background: "rgba(255,255,255,0.95)",
            fontSize: "15px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "16px",
            marginBottom: "25px",
            borderRadius: "15px",
            border: "none",
            outline: "none",
            background: "rgba(255,255,255,0.95)",
            fontSize: "15px",
            boxSizing: "border-box",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "15px",
            background:
              "linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6)",
            color: "white",
            fontWeight: "bold",
            fontSize: "17px",
            cursor: "pointer",
            boxShadow:
              "0 10px 25px rgba(59,130,246,0.4)",
          }}
        >
          Create Account
        </button>

        <div
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#cbd5e1",
          }}
        >
          Already have an account?
          <a
            href="/"
            style={{
              color: "#38bdf8",
              marginLeft: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </a>
        </div>
      </form>
    </div>
  );
}

export default Register;