import React from "react";
import "./EntrancePage.css";
import Logo from "../../assets/logoBlanc.png";
import BackgroundEntrance from "../../assets/moviesWallpapers.jpg";
import { useNavigate } from "react-router-dom";

const EntrancePage = () => {
  const navigate = useNavigate();

  return (
    <div className="entrancePage">
      <img
        src={Logo}
        alt="Logo"
        className="logo logoEntrance HeartbeatAndFadeIn "
        onClick={() => navigate("/home")}
      />
      <div
        className="backgroundRadialEffect fade-in"
        alt="radial effect on background"
      ></div>
      {/* <img
        src={BackgroundEntrance}
        alt="Movies wallpapers"
        className="backgroundEntrance fade-in"
      /> */}
      <div alt="Movies wallpapers" className="backgroundEntrance fade-in"></div>
    </div>
  );
};

export default EntrancePage;
