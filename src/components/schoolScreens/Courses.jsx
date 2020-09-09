import React, { Component } from "react";
import {
  withTheme,
  withWidth,
  isWidthUp,
  Button,
  withStyles,
  Icon,
  IconButton,
} from "@material-ui/core";

import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
import robot1 from "../../assets/robot1.mp4";
import linerobot2 from "../../assets/linerobot2.mp4";
import linerobot3 from "../../assets/linerobot3.mp4";
import linerobot4 from "../../assets/linerobot4.mp4";

import dancingrobot1 from "../../assets/dancingrobot1.mp4";
import { SkipNext } from "@material-ui/icons";

class Home0 extends Component {
  state = {
    loaded: "",
    chosen: "Dancing Robot",
  };

  // componentDidMount() {
  //   const list = document.getElementsByTagName("video");
  //   for (let item of list) {
  //     item.playbackRate = 2.0;
  //   }
  // }

  render() {
    const { inViewport, enterCount, theme } = this.props;
    const staticStyle = {
      transition: "font-size 1s, background-color 2s, color 2s",
      textAlign: "center",
      color: theme.palette.primary.contrastText,
      display: "flex",
      flexDirection: "column",
    };
    const StyledButton = withStyles({
      root: {
        color: theme.palette.primary.contrastText,
        position: "absolute",
        bottom: "20px",
        justifySelf: "center",
        border: "1px solid " + theme.palette.primary.contrastText,
      },
    })(IconButton);
    let big = isWidthUp("md", this.props.width);
    let small = isWidthUp("sm", this.props.width);
    if (!big) {
      const list = document.getElementsByTagName("video");
      for (let item of list) {
        item.playbackRate = 2.0;
      }
      /** Jesus Christ this is the worst code I've ever written */
      return (
        <>
          <h1
            className={`fullheight fullwidth unselectable`}
            style={getStyle(
              inViewport,
              enterCount,
              {
                fontSize: big ? "3em" : small ? "2em" : "1em",
                alignItems: "center",
                ...staticStyle,
              },
              "slideup slideleft fadein"
            )}
          >
            Cool School Projects
          </h1>
          <div
            style={{ display: "flex", flexDirection: "row", height: "100%" }}
          >
            {big && (
              <div
                style={{
                  flexDirection: "column",
                  height: "100%",
                  alignItems: "center",
                  flexGrow: 1,
                  color: theme.palette.primary.contrastText,
                  display: "flex",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "2vw",
                  }}
                >
                  Line Following/RC Robot
                </h1>
                <video
                  // width="100%"
                  // height="100%"
                  muted
                  autoPlay
                  loop
                  style={{
                    borderRadius: "20px",
                    marginBottom: "20px",
                    height: "calc(75%)",
                    aspectRatio: "9 / 16",
                    // width: "calc(75%)",
                  }}
                >
                  <source src={robot1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <div
              style={{
                display: "flex",
                height: "100%",
                flexGrow: 1,
                flexDirection: "column",
                color: theme.palette.primary.contrastText,
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "2vw",
                }}
              >
                {document.getElementById("source2")
                  ? document.getElementById("source2").getAttribute("src") ===
                    dancingrobot1
                    ? "Dancing Robot"
                    : "Line Following/RC Robot"
                  : "Dancing Robot"}
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  justifySelf: "center",
                  borderRadius: "20px",
                  height: "100%",
                }}
              >
                <video
                  style={{
                    justifySelf: "center",
                    borderRadius: "20px",
                    marginBottom: "20px",
                    height: "calc(80%)",
                    // width: "calc(75%)",
                  }}
                  muted
                  autoPlay
                  loop
                  id="video2"
                >
                  <source src={dancingrobot1} type="video/mp4" id="source2" />
                  Your browser does not support the video tag.
                </video>

                {
                  <StyledButton
                    onClick={() => {
                      const video = document.getElementById("video2");
                      const source = document.getElementById("source2");
                      video.pause();
                      const currVid = source.getAttribute("src");
                      this.setState({
                        chosen:
                          currVid === dancingrobot1
                            ? "Line Following/RC Robot"
                            : "Dancing Robot",
                      });
                      source.setAttribute(
                        "src",
                        !big
                          ? currVid === dancingrobot1
                            ? robot1
                            : dancingrobot1
                          : dancingrobot1
                      );
                      video.load();
                      video.play();
                    }}
                  >
                    <Icon>
                      <SkipNext />
                    </Icon>
                  </StyledButton>
                }
              </div>
            </div>
          </div>
        </>
      );
    }

    if (big) {
      const video = document.getElementById("video2");
      const source = document.getElementById("source2");
      if (video && source) {
        video.pause();
        source.setAttribute("src", dancingrobot1);
        video.load();
        video.play();
      }
      const list = document.getElementsByTagName("video");
      for (let item of list) {
        item.playbackRate = 2.0;
      }

      return (
        <>
          <h1
            className={`fullheight fullwidth unselectable`}
            style={getStyle(
              inViewport,
              enterCount,
              {
                fontSize: big ? "3em" : small ? "2em" : "1em",
                alignItems: "center",
                ...staticStyle,
              },
              "slideup slideleft fadein"
            )}
          >
            Cool School Projects
          </h1>
          <div
            style={{ display: "flex", flexDirection: "row", height: "100%" }}
          >
            {
              <div
                style={{
                  flexDirection: "column",
                  height: "100%",
                  alignItems: "center",
                  flexGrow: 1,
                  color: theme.palette.primary.contrastText,
                  display: "flex",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "2vw",
                  }}
                >
                  Line Following/RC Robot
                </h1>
                <video
                  // width="100%"
                  // height="100%"
                  muted
                  autoPlay
                  loop
                  style={{
                    borderRadius: "20px",
                    marginBottom: "20px",
                    height: "calc(75%)",
                    aspectRatio: "9 / 16",
                    // width: "calc(75%)",
                  }}
                >
                  <source src={robot1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            }
            <div
              style={{
                display: "flex",
                height: "100%",
                flexGrow: 1,
                flexDirection: "column",
                color: theme.palette.primary.contrastText,
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "2vw",
                }}
              >
                Dancing Robot
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  justifySelf: "center",
                  borderRadius: "20px",
                  height: "100%",
                }}
              >
                {
                  <video
                    style={{
                      justifySelf: "center",
                      borderRadius: "20px",
                      marginBottom: "20px",
                      height: "calc(80%)",
                      // width: "calc(75%)",
                    }}
                    muted
                    autoPlay
                    loop
                  >
                    <source src={dancingrobot1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                }
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default withTheme(
  withWidth()(handleViewport(Home0), { rootMargin: "-1px" })
);
