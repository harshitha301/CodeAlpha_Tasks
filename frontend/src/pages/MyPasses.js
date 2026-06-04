import React, { useEffect, useState } from "react";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "../components/Navbar";
function MyPasses() {
  const [passes, setPasses] = useState([]);

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

  const downloadPDF = async (id) => {
    const input = document.getElementById(
      `pass-${id}`
    );

    const canvas = await html2canvas(input);

    const imgData =
      canvas.toDataURL("image/png");

    const pdf = new jsPDF();

    pdf.addImage(
      imgData,
      "PNG",
      10,
      10,
      190,
      0
    );

    pdf.save(`SmartPass-${id}.pdf`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#1e3a8a,#312e81)",
      }}
    >
      <Navbar />
      <h1
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "40px",
        }}
      >
        🎫 My Smart Passes
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(380px,1fr))",
          gap: "30px",
        }}
      >
        {passes.map((pass) => (
          <div key={pass.id}>
            <div
              id={`pass-${pass.id}`}
              style={{
                background:
                  "rgba(255,255,255,0.08)",
                backdropFilter: "blur(15px)",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                borderRadius: "25px",
                padding: "25px",
                color: "white",
                boxShadow:
                  "0 20px 40px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h2
                    style={{
                      margin: 0,
                    }}
                  >
                    🚌 SmartPassCloud
                  </h2>

                  <p
                    style={{
                      color: "#cbd5e1",
                    }}
                  >
                    Digital Bus Pass
                  </p>
                </div>

                {pass.photo && (
                  <img
                    src={`http://localhost:5000/uploads/${pass.photo}`}
                    alt=""
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "15px",
                      objectFit: "cover",
                      border:
                        "3px solid white",
                    }}
                  />
                )}
              </div>

              <hr
                style={{
                  margin: "20px 0",
                  borderColor:
                    "rgba(255,255,255,0.2)",
                }}
              />

              <div
                style={{
                  background:
                    "rgba(255,255,255,0.1)",
                  padding: "10px",
                  borderRadius: "10px",
                  marginBottom: "15px",
                }}
              >
                Pass ID: #{pass.id}
              </div>

              <p>
                <strong>Name:</strong>{" "}
                {pass.name}
              </p>

              <p>
                <strong>Route:</strong>{" "}
                {pass.route}
              </p>

              <p>
                <strong>Duration:</strong>{" "}
                {pass.duration}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    padding:
                      "6px 12px",
                    borderRadius:
                      "20px",
                    background:
                      pass.status ===
                      "Approved"
                        ? "#22c55e"
                        : pass.status ===
                          "Rejected"
                        ? "#ef4444"
                        : "#f59e0b",
                  }}
                >
                  {pass.status}
                </span>
              </p>

              <div
                style={{
                  marginTop: "25px",
                  display: "flex",
                  justifyContent:
                    "center",
                }}
              >
                <div
                  style={{
                    background:
                      "white",
                    padding: "12px",
                    borderRadius:
                      "15px",
                  }}
                >
                  <QRCodeCanvas
                    value={`
Name:${pass.name}
Route:${pass.route}
Duration:${pass.duration}
Status:${pass.status}
`}
                    size={160}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() =>
                downloadPDF(pass.id)
              }
              style={{
                width: "100%",
                marginTop: "15px",
                padding: "14px",
                border: "none",
                borderRadius: "15px",
                background:
                  "linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6)",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow:
                  "0 10px 25px rgba(59,130,246,0.4)",
              }}
            >
              📥 Download Pass
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPasses;