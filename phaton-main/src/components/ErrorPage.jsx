import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          padding: "20px 40px",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "5rem", margin: "0" }}>404</h1>
        <p style={{ fontSize: "1.5rem", margin: "0" }}>Page not found</p>
      </div>

      <Link to="/">
        <button
          style={{
            backgroundColor: "#2C3E50",
            color: "white",
            border: "none",
            padding: "12px 30px",
            borderRadius: "25px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Back to Homepage
        </button>
      </Link>
    </div>
  );
}
