import React from "react";
import "../styles/Screen.css";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
let Screen = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        id={props.id}
        ref={props.refProp}
        style={{
          ...props.screenStyle,
          width: "100vw",
          height: isMobile ? "90vh" : "100vh",
        }}
        className="screen container"
      >
        {props.children}
      </div>
    </>
  );
};
export default Screen;
