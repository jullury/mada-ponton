import React from "react";
import "./Content.css";
import { Alert } from "./Alert";
import { PersonalInfo } from "./PersonalInfo";
import { Deletion } from "./Deletion";
import { Footer } from "./Footer";
export const Content: React.FC = () => {
  return (
    <div className="app-content">
      <Alert />
      <PersonalInfo />
      <Deletion />
      <Footer />
    </div>
  );
};
