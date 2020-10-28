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
    const { theme } = this.props;
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <code
          className={`unselectable fullwidth`}
          style={{
            width: "100%",
            textAlign: "center",
            color: theme.palette.primary.contrastText,
            fontSize: "clamp(2em, 10vw, 8em)",
          }}
        >
          I am
        </code>
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
      </div>
    );
  }
}

export default withTheme(
  withWidth()(handleViewport(Work0), { rootMargin: "-1px" })
);
