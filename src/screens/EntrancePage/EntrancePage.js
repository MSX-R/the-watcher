import React from "react";
import "./EntrancePage.css";
import Logo from "../../assets/logoBlanc.png";

import { useNavigate } from "react-router-dom";

const EntrancePage = () => {
    const navigate = useNavigate();


  return (
    <div className="entrance">
    <img
      src={Logo}
      alt="Logo"
      className="logo HeartbeatAnim"
      onClick={() => navigate("/home")}
    />
  </div>
  )
};

export default EntrancePage;
