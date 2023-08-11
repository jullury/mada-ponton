import React from "react";
import "./Alert.css";
import carrerIcon from "../../assets/career.svg";
export const Alert: React.FC = () => {
  return (
    <div className="app-alert">
      <div className="carrer-image">
        <img src={carrerIcon} />
      </div>
      <div className="carrer-label">
        <h4>Premium Account</h4>
        <p>
          You have a premium account, granting you access to all the remarkable
          features offered by ResumeDone. With this privilege, you can indulge
          in the freedom of downloading an unlimited number of resumes and cover
          letters in both PDF and Word formats.
        </p>
      </div>
    </div>
  );
};
