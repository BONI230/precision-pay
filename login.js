import React, { useState } from "react";

export default function Login({ go }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNext = () => {
    if (email && password) {
      alert("Login successful!");
      go("home"); 
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: 20 }}>Login to Precision Pay</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: 10,
          marginBottom: 10,
          width: 250,
          borderRadius: 5,
          border: "1px solid #ccc",
        }}
      />

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: 10,
          marginBottom: 20,
          width: 250,
          borderRadius: 5,
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={handleNext}
        style={{
          backgroundColor: "purple",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Next
      </button>

      <p
        onClick={() => go("welcome")}
        style={{
          marginTop: 20,
          color: "blue",
          cursor: "pointer",
        }}
      >
        Back to Welcome
      </p>
    </div>
  );
}
