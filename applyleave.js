import React, { useState } from "react";

export default function ApplyLeave({ go }) {
  const [type, setType] = useState("Annual Leave");
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    if (reason.trim() === "") {
      alert("Please enter a reason.");
    } else {
      alert(`Leave Applied: ${type}\nReason: ${reason}`);
      go("dashboard"); 
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        padding: 30,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0ff",
      }}
    >
      <h2>Apply for Leave</h2>

      <label>Type of Leave:</label>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{
          display: "block",
          padding: 10,
          marginBottom: 20,
          marginTop: 10,
          width: 250,
        }}
      >
        <option>Annual Leave</option>
        <option>Maternity Leave</option>
        <option>Academic Leave</option>
      </select>

      <label>Reason:</label>
      <textarea
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        rows={4}
        style={{
          display: "block",
          width: 400,
          padding: 10,
          marginBottom: 20,
          marginTop: 10,
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "purple",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
      >
        Submit
      </button>

      <p
        onClick={() => go("dashboard")}
        style={{ marginTop: 20, color: "blue", cursor: "pointer" }}
      >
        Back to Dashboard
      </p>
    </div>
  );
}
