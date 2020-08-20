import React from "react";
import "../styles/Screen.css";
import { useEffect } from "react";
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
        }}
        className="screen container"
      >
        {props.children}
      </div>
    </>
  );
};
export default Screen;
