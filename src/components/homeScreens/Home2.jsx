import React, { Component } from "react";
import { withStyles, withWidth, isWidthUp, withTheme } from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
import { IconButton } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
class Home2 extends Component {
  state = {
    loaded: false,
    showArrow: false,
  };

  checkLoaded = () => {
    const { inViewport, enterCount } = this.props;
    if (inViewport && enterCount === 1 && !this.state.loaded) {
      this.setState({ loaded: true });
      setTimeout(() => {
        this.props.intro();
        this.setState(() => ({ showArrow: true }));
      }, 1000);
    }
  };
  render() {
    const { theme } = this.props;
    let StyledIconButton = withStyles({
      root: {
        color: theme.palette.primary.contrastText,
        "&:hover": {
          color: theme.palette.primary.light,
        },
        transition: "color .3s",
      },
    })(IconButton);

    let StyledIcon = withStyles({
      root: {
        fontSize: "100px",
      },
    })(ExpandMore);
    const { inViewport, enterCount } = this.props;
    this.checkLoaded();
    const staticStyle = {
      transition: "font-size 1s, background-color 2s, color 2s",
      color: theme.palette.primary.contrastText,
      textAlign: "center",
    };
    let big = isWidthUp("md", this.props.width);
    let small = isWidthUp("sm", this.props.width);
    return (
      <>
        <h1
          className={`fullheight fullwidth unselectable`}
          style={getStyle(
            inViewport,
            enterCount,
            {
              fontSize: big ? "9em" : small ? "6em" : "4em",
              ...staticStyle,
            },
            "slideright slidedown fadein"
          )}
        >
          Here's my portfolio.
        </h1>
        <div
          style={{
            textAlign: "center",
            transform: this.state.showArrow
              ? "translateY(0em)"
              : "translateY(-1em)",
            opacity: this.state.showArrow ? 1 : 0,
            transition: "opacity 1s, transform 1s",
            position: "absolute",
            bottom: "10px",
            justifySelf: "center",
          }}
        >
          <StyledIconButton onClick={this.props.onClick}>
            <StyledIcon />
          </StyledIconButton>
        </div>
      </>
    );
  }
}

export default withTheme(withWidth()(handleViewport(Home2)));
