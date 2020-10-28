import React, { Component } from "react";
import { withTheme, withWidth, isWidthUp } from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
class SecureKeyAchievements extends Component {
  state = {
    loaded: "",
  };

  render() {
    const { inViewport, enterCount, theme } = this.props;
    const staticStyle = {
      transition: "font-size 1s, background-color 2s, color 2s",
      textAlign: "center",
      color: theme.palette.primary.contrastText,
    };
    let big = isWidthUp("md", this.props.width);
    let small = isWidthUp("sm", this.props.width);
    const listStyle = {
      marginBottom: "20px",
      width: "75%",
    };
    return (
      <>
        <div
          className={`fullheight fullwidth unselectable`}
          style={getStyle(
            inViewport,
            enterCount,
            {
              fontSize: big ? "8em" : small ? "4em" : "2em",
              ...staticStyle,
            },
            "slidedown fadein"
          )}
        >
          <p style={{ margin: 0 }}>Languages and Frameworks</p>
        </div>

        <ul
          style={{
            ...staticStyle,
            textAlign: "center",
            alignItems: "center",
            paddingLeft: "0",
            flexGrow: 1,
            display: "flex",
            fontSize: "clamp(1rem, 4vw, 2rem)",
            listStyleType: "none",
            transition: "font-size .1s",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "100%",
          }}
          className="unselectable"
        >
          <li style={listStyle}>
            Backend:{" "}
            <span
              style={{
                color: "#90C53F",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              Node.js
            </span>
            ,{" "}
            <span
              style={{
                color: "grey",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              {" "}
              Express.js
            </span>
            ,{" "}
            <span
              style={{
                color: "#ffc331",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              Python
            </span>
            ,{" "}
            <span
              style={{
                color: "grey",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              Flask
            </span>
          </li>
          <li style={listStyle}>
            Frontend:{" "}
            <span
              style={{
                color: "#5ED3F3",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              React.js
            </span>
            ,{" "}
            <span
              style={{
                color: "#5ED3F3",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              React Native
            </span>
            ,{" "}
            <span
              style={{
                color: "#1773B6",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              CSS
            </span>
            ,{" "}
            <span
              style={{
                color: "#E44D26",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              HTML
            </span>
          </li>
          <li style={listStyle}>
            Database:{" "}
            <span
              style={{
                color: "#84BA83",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              MongoDB
            </span>
            ,{" "}
            <span
              style={{
                color: "#FFA713",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              Firebase
            </span>
            ,{" "}
            <span
              style={{
                color: "#D82F27",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              Redis
            </span>
          </li>
          <li style={listStyle}>
            Design:{" "}
            <span
              style={{
                color: "#A259FF",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              Figma
            </span>
            ,{" "}
            <span
              style={{
                color: "#3D80F7",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              Material-UI
            </span>
            ,{" "}
            <span
              style={{
                color: "#563D7C",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              Bootstrap
            </span>
          </li>
        </ul>
      </>
    );
  }
}

export default withTheme(
  withWidth()(handleViewport(SecureKeyAchievements), { rootMargin: "-1px" })
);
