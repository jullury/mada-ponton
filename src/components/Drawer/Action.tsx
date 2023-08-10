import React from "react";
import addIcon from "../../assets/add-circle.svg";
import "./Drawer.css";
import { ActionProps } from "./types";

export const Action: React.FC<ActionProps> = (props) => {
  return (
    <div className="drawer-action">
      <img src={props.icon} className="action-image" />
      <h5 className="action-label">{props.text}</h5>
      {props.showRightIcon && <img src={addIcon} className="action-add-icon" />}
    </div>
  );
};
