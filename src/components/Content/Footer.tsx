import React from "react";
import "./Footer.css";
export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p>
        <a href="javascript:void(0)" className="support-link">
          Get in touch with our support team
        </a>{" "}
        if you have any question or want to leave some feedback. We’ll be happy
        to hear from you.
      </p>
      <div className="divider" />
      <div className="links">
        <a href="javascript:void(0)">Terms & Conditions</a>
        <a href="javascript:void(0)">Privacy Policy</a>
        <a href="javascript:void(0)">FAQ</a>
        <a href="javascript:void(0)">Contact Us</a>
      </div>
    </div>
  );
};
