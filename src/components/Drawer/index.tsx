import React from "react";
import listIcon from "../../assets/list.svg";
import searchIcon from "../../assets/search.svg";
import starIcon from "../../assets/star.svg";
import boardIcon from "../../assets/board.svg";
import boardAgentIcon from "../../assets/board-agent.svg";
import timeIcon from "../../assets/time.svg";
import myBoardsIcon from "../../assets/my-boards.svg";
import logo from "../../assets/logo.svg";
import "./Drawer.css";
import { Action } from "./Action";
import { Navigation } from "./Navigation";
import { Account } from "./Account";

export const Drawer: React.FC = () => {
  return (
    <div className="app-drawer">
      <div className="logo-container">
        <img src={logo} />
      </div>
      <nav>
        <Action text="My templates" icon={listIcon} />
        <Action text="Search" icon={searchIcon} />
        <Navigation text="My templates" icon={starIcon} />
        <Navigation text="Computer hardware engineer" icon={starIcon} />
        <Navigation text="Network Engineer" icon={starIcon} />
        <Navigation text="Technical Support" icon={starIcon} />
        <Navigation text="Network administrator" icon={starIcon} />
        <Navigation text="Management" icon={starIcon} />
        <Navigation text="Data analysis" icon={starIcon} />
        <Navigation text="Computer technician" icon={starIcon} />
        <Navigation text="Past search 1" icon={starIcon} />
        <Navigation text="Past search 2" icon={timeIcon} />
        <Navigation text="Computers and information..." icon={timeIcon} />
        <Navigation text="Database Administrator" icon={timeIcon} />
        <Navigation text="Computer security" icon={timeIcon} />
        <Navigation text="Computer Systems Analyst" icon={timeIcon} />
        <Action text="My boards" icon={myBoardsIcon} showRightIcon />
        <Navigation text="Board 1" icon={boardIcon} />
        <Navigation text="Board 2" icon={boardIcon} />
        <Navigation text="Board 3" icon={boardIcon} />
        <Navigation text="Board agent 1" icon={boardAgentIcon} />
        <Navigation text="Board agent 1" icon={boardAgentIcon} />
        <Navigation text="Board agent 1" icon={boardAgentIcon} />
      </nav>
      <Account />
    </div>
  );
};
