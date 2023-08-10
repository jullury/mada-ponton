import React from "react";
import "./Drawer.css";
import { NavigationProps } from "./types";

export const Navigation: React.FC<NavigationProps> = (props) => {
  const { showIcon = true, ...restProps } = props;
  return (
    <div className="drawer-navigation">
      {showIcon && !restProps.showCheckbox && (
        <img src={restProps.icon} className="action-image" />
      )}
      {restProps.showCheckbox && (
        <input className="navigation-checkbox" type="checkbox" />
      )}
      <h5 className="navigation-label">{restProps.text}</h5>
      {restProps.showNotification && (
        <h5 className="notification-badge">+99</h5>
      )}
    </div>
  );
};
