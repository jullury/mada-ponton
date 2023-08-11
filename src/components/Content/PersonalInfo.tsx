import React from "react";
import "./PersonalInfo.css";
import { InputMix } from "./InputMix";
import avatar from "../../assets/avatar.svg";
export const PersonalInfo: React.FC = () => {
  return (
    <div className="personal-info">
      <h4 className="personal-info-label">Personal Information</h4>
      <form className="form-container" onSubmit={(e) => e.preventDefault()}>
        <div className="personal-info-form">
          <div className="form-line">
            <div className="form-group w-1/2">
              <InputMix label="First Name" defaultValue="Petter" />
            </div>
            <div className="form-group w-1/2">
              <InputMix label="Last Name" defaultValue="Cetera" />
            </div>
          </div>
          <div className="form-line">
            <div className="form-group w-1/2">
              <InputMix label="City" defaultValue="London" />
            </div>
            <div className="form-group w-1/2">
              <InputMix label="Postal Code" defaultValue="E2 4XF" />
            </div>
          </div>
          <div className="form-line">
            <div className="form-group w-full">
              <InputMix label="Address" defaultValue="123 Example" />
            </div>
          </div>
          <div className="form-line">
            <div className="form-group w-1/2">
              <InputMix
                label="Email"
                type="email"
                defaultValue="petter@gmail.com"
              />
            </div>
            <div className="form-group w-1/2">
              <InputMix label="Phone" type="tel" defaultValue="+442223334444" />
            </div>
          </div>
          <div className="form-line">
            <div className="form-group w-1/2">
              <InputMix label="Password" type="password" defaultValue="" />
            </div>
            <div className="form-group w-1/2"></div>
          </div>
          <p className="use-email-text">
            Use this email to log in to your&nbsp;
            <a href="javascript:void(0)" className="resume-link">
              resumedone.io
            </a>
            &nbsp;account and receive notifications.
          </p>
          <button className="submit">
            <p>Save</p>
          </button>
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </form>
    </div>
  );
};
