import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
const ADMIN_PASSCODE = "1234";

function AdminPanel() {
  const [passes, setPasses] = useState([]);
  const [search, setSearch] = useState("");
const [authorized, setAuthorized] = useState(false);
const [passcode, setPasscode] = useState("");
const checkPasscode = () => {
  if (passcode === ADMIN_PASSCODE) {
    setAuthorized(true);
  } else {
    alert("Wrong Passcode");
  }
};
  useEffect(() => {
    fetchPasses();
  }, []);

  const fetchPasses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/passes/all"
      );

      setPasses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const approvePass = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/passes/approve/${id}`
      );

      alert("Pass Approved Successfully");

      fetchPasses();
    } catch (error) {
      console.log(error);
      alert("Approval Failed");
    }
  };

  const rejectPass = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/passes/reject/${id}`
      );

      alert("Pass Rejected Successfully");

      fetchPasses();
    } catch (error) {
      console.log(error);
      alert("Reject Failed");
    }
  };

  const downloadPass = (pass) => {
    const content = `
SMART PASS CLOUD

Name: ${pass.name}
Email: ${pass.email}
Route: ${pass.route}
Duration: ${pass.duration}
Status: ${pass.status}
`;

    const blob = new Blob([content], {
      type: "text/plain",
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = `${pass.name}_Pass.txt`;

    link.click();
  };

  const filteredPasses = passes.filter((pass) =>
    pass.name?.toLowerCase().includes(
      search.toLowerCase()
    )
  );

  const approvedCount = passes.filter(
    (p) => p.status === "Approved"
  ).length;

  const rejectedCount = passes.filter(
    (p) => p.status === "Rejected"
  ).length;

  const pendingCount = passes.filter(
    (p) => p.status === "Pending"
  ).length;
if (!authorized) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#1e1b4b,#312e81)",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2>🔒 Admin Access</h2>

        <input
  type="password"
  placeholder="Enter Admin Passcode"
  value={passcode}
  onChange={(e) => setPasscode(e.target.value)}
  style={{
    width: "100%",
    padding: "15px",
    marginTop: "20px",
    borderRadius: "10px",
    border: "none",
    boxSizing: "border-box",
    background: "#ffffff",
    color: "#000000",
    fontSize: "16px",
    outline: "none",
  }}
/>

        <button
          onClick={checkPasscode}
          style={{
            width: "100%",
            marginTop: "15px",
            padding: "15px",
            background: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Enter Admin Panel
        </button>
      </div>
    </div>
  );
}
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#1e1b4b,#312e81)",
        color: "white",
      }}
    >
       <Navbar />
      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  }}
>
  <h1
    style={{
      fontSize: "40px",
      margin: 0,
    }}
  >
  🚌 SmartPassCloud Admin Panel
</h1>
  <button
  onClick={() => {
    window.location.href = "/";
  }}
  style={{
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
  }}
>
  Logout
</button>
</div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "20px",
            width: "220px",
            textAlign: "center",
          }}
        >
          <h3>Total Passes</h3>
          <h1>{passes.length}</h1>
        </div>

        <div
          style={{
            background: "#166534",
            padding: "20px",
            borderRadius: "20px",
            width: "220px",
            textAlign: "center",
          }}
        >
          <h3>Approved</h3>
          <h1>{approvedCount}</h1>
        </div>

        <div
          style={{
            background: "#92400e",
            padding: "20px",
            borderRadius: "20px",
            width: "220px",
            textAlign: "center",
          }}
        >
          <h3>Pending</h3>
          <h1>{pendingCount}</h1>
        </div>

        <div
          style={{
            background: "#991b1b",
            padding: "20px",
            borderRadius: "20px",
            width: "220px",
            textAlign: "center",
          }}
        >
          <h3>Rejected</h3>
          <h1>{rejectedCount}</h1>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search Student Name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "12px",
          border: "none",
          marginBottom: "25px",
          fontSize: "16px",
          color: "#000",
          background: "#fff",
        }}
      />

      {filteredPasses.map((pass) => (
        <div
          key={pass.id}
          style={{
            background: "rgba(255,255,255,0.08)",
            padding: "25px",
            borderRadius: "20px",
            marginBottom: "20px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
          }}
        >
          <h2>{pass.name}</h2>

          <p>📧 {pass.email}</p>

          <p>🛣 Route: {pass.route}</p>

          <p>📅 Duration: {pass.duration}</p>

          <p>
            📌 Status:
            <strong> {pass.status}</strong>
          </p>

          <div
            style={{
              marginTop: "15px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => approvePass(pass.id)}
              style={{
                background: "#22c55e",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Approve
            </button>

            <button
              onClick={() => rejectPass(pass.id)}
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Reject
            </button>

            <button
              onClick={() => downloadPass(pass)}
              style={{
                background: "#3b82f6",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Download Pass
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;