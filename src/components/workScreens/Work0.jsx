import React, { Component } from "react";
import { withTheme, withWidth, isWidthUp, Fade } from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
import a from "indefinite";
import Carousel from "../Carousel";

const whatIAm = [
  "a Full Stack Developer",
  "driven",
  "in 3rd Year @ UBC",
  "goal-oriented",
  "a COOP intern",
  "a life-long learner",
  "passionate about web development",
  "a computer engineering student",
  "a music lover",
  "a Software Engineer at SecureKey Technologies Inc.",
  "interested in robotics",
];
class Work0 extends Component {
  state = {
    loaded: "",
    shown: whatIAm[0],
    index: 0,
    currAngle: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.increment();
    }, 2000);
    setInterval(() => {
      this.rotate();
    }, 10);
  }

  rotate = () => {
    this.setState(() => ({
      currAngle: this.state.currAngle + 1 >= 360 ? 0 : this.state.currAngle + 1,
    }));
  };

  increment = () => {
    this.setState(() => ({
      index: this.state.index + 1 >= whatIAm.length ? 0 : this.state.index + 1,
    }));

    this.setState(() => ({ shown: whatIAm[this.state.index] }));
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
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* <h1
          style={getStyle(
            inViewport,
            enterCount,
            {
              fontSize: "clamp(1em, 10vw, 4em)",
              ...staticStyle,
            },
            "slideleft fadein rotate"
          )}
        >
          Hi!
        </h1> */}
        <code
          className={`unselectable`}
          style={{
            // height: "50%",
            textAlign: "center",
            color: theme.palette.primary.contrastText,
            fontSize: "clamp(2em, 10vw, 8em)",
          }}
        >
          I am
        </code>
        {/* <div> */}
        <Carousel
          items={whatIAm}
          speed={2000}
          style={{
            // height: "50%",
            textAlign: "center",
            color: theme.palette.primary.contrastText,
            fontSize: "clamp(2em, 10vw, 8em)",
          }}
        />
        {/* </div> */}
        {/* <Fade in>
          <h1
            style={getStyle(
              inViewport,
              enterCount,
              {
                fontSize: "clamp(2em, 10vw, 8em)",
                ...staticStyle,
                transform: `rotateZ(${this.state.currAngle})`,
              },
              "slideright fadein slidedown"
            )}
          >
            {this.state.shown}
          </h1>
        </Fade> */}
      </div>
    );
  }
}

export default withTheme(
  withWidth()(handleViewport(Work0), { rootMargin: "-1px" })
);
