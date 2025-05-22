import React from "react";

export default function Welcome({ go }) {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "purple",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 50, fontWeight: "bold" }}>Precision Pay</h1>
      <p style={{ fontSize: 16, marginBottom: 40 }}>
        A MADE BY TIER DATA.
      </p>
      <button
        onClick={() => go("login")} 
        style={{
          backgroundColor: "purple",
          color: "purple",
          padding: "10px 10px",
          border: "none",
          borderRadius: "10px",
          fontSize: "19px",
        }}
      >
        Next
      </button>
    </div>
  );
}
