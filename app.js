import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import ApplyLeave from "./components/ApplyLeave";

export default function App() {
  const [page, setPage] = useState("welcome");

  const renderPage = () => {
    if (page === "welcome") return <Welcome go={setPage} />;
    if (page === "login") return <Login go={setPage} />;
    if (page === "home") return <Home go={setPage} />;
    if (page === "dashboard") return <Dashboard go={setPage} />;
    if (page === "apply") return <ApplyLeave go={setPage} />;
  };

  return renderPage();
}
