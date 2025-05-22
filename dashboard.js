import React from "react";

export default function Dashboard({ go }) {
  return (
    <div
      style={{
        height: "100vh",
        padding: 30,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2 style={{ color: "purple" }}>My Dashboard</h2>

      <div
        style={{
          display: "flex",
          gap: 20,
          marginTop: 20,
          flexWrap: "wrap",
        }}
      >
        <Card title="Maternity Leave Days" count={90} />
        <Card title="Annual Leave Days" count={21} />
        <Card title="Academic Leave Days" count={30} />
      </div>

      <button
        onClick={() => go("apply")}
        style={{
          marginTop: 40,
          backgroundColor: "purple",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
      >
        Apply for Leave
      </button>
      Submit
      
    </div>
  ); 
}

function Card({ title, count }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        minWidth: 200,
      }}
    >
      <h4>{title}</h4>
      <p style={{ fontSize: 24, color: "purple" }}>{count} days</p>
    </div>
  );
}
