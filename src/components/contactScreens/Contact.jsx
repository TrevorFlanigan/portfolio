import React, { Component } from "react";
import {
  withTheme,
  withWidth,
  isWidthUp,
  Fade,
  Icon,
  withStyles,
} from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
import { GitHub } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import { Description } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Tooltip } from "@material-ui/core";
import resume from "../../assets/Trevor Flanigan Resume.pdf";
import { Phone } from "@material-ui/icons";
import { Email } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";
import { Button } from "@material-ui/core";

class Work0 extends Component {
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
    const StyledButton = withStyles({
      root: {
        margin: big ? "1em" : small ? ".5em" : ".3em",
        marginTop: 0,
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "5px",
        height: "60%",
        flexGrow: 1,
        color: theme.palette.primary.contrastText,
        "& svg": {
          fontSize: big ? "7em" : small ? "4em" : "3em",
        },
      },
    })(IconButton);

    const StyledIcon = withStyles({
      root: {
        width: "100%",
        height: "100%",
      },
    })(Icon);

    return (
      <div
        className={`fullheight fullwidth unselectable`}
        style={getStyle(
          inViewport,
          enterCount,
          {
            fontSize: "clamp(1em, 4vw, 4em)",
            ...staticStyle,
          },
          "slideright fadein"
        )}
      >
        <h1
          style={{
            fontSize: "clamp(1em, 4vw, 4em)",
          }}
        >
          {" "}
          Contact Me{" "}
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ height: "50%" }}>
            <Tooltip title="Resume">
              <StyledButton variant="outlined" download href={resume}>
                <Description fontSize="large" />
              </StyledButton>
            </Tooltip>

            <Tooltip title="LinkedIn">
              <StyledButton
                variant="outlined"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/TrevorFlanigan"
              >
                <LinkedIn fontSize="large" />
              </StyledButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <StyledButton
                iconStyle={{ width: "100%", height: "100%" }}
                variant="outlined"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.github.com/TrevorFlanigan"
              >
                <GitHub />
              </StyledButton>
            </Tooltip>
          </div>
          <div style={{ height: "50%" }}>
            <Tooltip title="Instagram">
              <StyledButton
                variant="outlined"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/TrevorFlan"
              >
                <Instagram fontSize="large" />
              </StyledButton>
            </Tooltip>

            <Tooltip title="Email">
              <StyledButton
                variant="outlined"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:trevorflanigan@alumni.ubc.ca"
              >
                <Email fontSize="large" />
              </StyledButton>
            </Tooltip>
            <Tooltip title="604-318-9666">
              <StyledButton
                variant="outlined"
                href={!big && !small && "tel:604-318-9666"}
              >
                <Phone />
              </StyledButton>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }
}

export default withTheme(
  withWidth()(handleViewport(Work0), { rootMargin: "-1px" })
);
