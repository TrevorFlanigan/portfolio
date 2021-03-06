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
          <p style={{ margin: 0 }}>Achievements</p>
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
            Engineered{" "}
            <span
              style={{
                color: "#90C53F",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              Node.js Express Backend
            </span>
          </li>
          <li style={listStyle}>
            Designed and Developed{" "}
            <span
              style={{
                color: "#5ED3F3",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              React.js Frontend{" "}
            </span>
          </li>
          <li style={listStyle}>
            Presented application demonstration to CTO and board which resulted
            in{" "}
            <span
              style={{
                color: "orange",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              increased focus and resource allocation{" "}
            </span>{" "}
            to this initiative
          </li>
          <li style={listStyle}>
            Recieved COOP{" "}
            <span
              style={{
                color: "green",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              term extention{" "}
            </span>{" "}
            offer
          </li>
          <li style={listStyle}>
            <span
              style={{
                color: "#DB3654",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              Agile
            </span>{" "}
            Development
          </li>
        </ul>
      </>
    );
  }
}

export default withTheme(
  withWidth()(handleViewport(SecureKeyAchievements), { rootMargin: "-1px" })
);
