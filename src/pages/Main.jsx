import React from "react";
import "./mainCont.scss";
import { Outlet } from 'react-router-dom'
import LeftColumn from "../components/leftColumn/LeftColumn";
import RigthColumn from "../components/rightColumn/RigthColumn";
const Main = () => {
  return (
    <div
      className={
        "main_container left-column-shown left-column-open trans_slide"
      }
      id={`Main`}
    >
      <div className={`${"left_column"}`}>
        <LeftColumn />
      </div>
      <div className={`${"right_column"}`}>
        {/* <RigthColumn /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
