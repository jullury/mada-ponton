import React from "react";
import settingIcon from "../../assets/setting.svg";
import carlaImg from "../../assets/carla.svg";
import "./Drawer.css";

export const Account: React.FC = () => {
  return (
    <div className="user-account">
      <div className="user">
        <img src={carlaImg} />
        <p>Carla</p>
      </div>
      <button className="setting">
        <img src={settingIcon} />
      </button>
    </div>
  );
};
