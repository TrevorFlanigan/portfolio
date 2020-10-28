import React, { Component } from "react";
import { withStyles, createStyles } from "@material-ui/core";

class Carousel extends Component {
  state = {
    index: 0,
    shown: "",
    cursor: true,
    currWordLength: this.props.items[0].length,
    currWord: this.props.items[0],
    letterIndex: 0,
    waiting: false,
  };
  componentDidMount() {
    setInterval(() => {
      this.blink();
    }, 530);
    setInterval(() => {
      if (!this.state.waiting) {
        this.character();
      }
    }, 50);
  }

  character = () => {
    if (this.state.letterIndex !== this.state.currWordLength) {
      this.setState({
        shown: this.state.currWord.substring(0, this.state.letterIndex + 1),
        letterIndex: this.state.letterIndex + 1,
      });
    } else {
      this.setState(() => ({ waiting: true }));
      setTimeout(() => {
        this.setState({ waiting: false, shown: "", letterIndex: 0 });
      }, 1500);
      this.increment();
    }
  };

  rotate = () => {
    this.setState(() => ({
      currAngle: this.state.currAngle + 1 > 360 ? 0 : this.state.currAngle + 1,
    }));
  };

  blink = () => {
    this.setState({ cursor: !this.state.cursor });
  };
  increment = () => {
    this.setState(() => ({
      index:
        this.state.index + 1 >= this.props.items.length
          ? 0
          : this.state.index + 1,
    }));
    this.setState(() => ({
      currWord: this.props.items[this.state.index],
      currWordLength: this.props.items[this.state.index].length,
    }));
  };
  render() {
    const {} = this.props.classes;
    return (
      <code
        className="unselectable"
        style={{
          ...this.props.style,
          width: "calc(100% - 2px)",
        }}
      >
        {this.state.shown}
        <span
          style={{
            opacity: !this.state.waiting ? 1 : this.state.cursor ? 1 : 0,
          }}
        >
          _
        </span>
      </code>
    );
  }
}

const muiStyles = createStyles({});
export default withStyles(muiStyles)(Carousel);
