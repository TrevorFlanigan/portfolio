import React, { Component } from "react";
import Screen from "./Screen";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { withStyles, IconButton } from "@material-ui/core";
import Description from "@material-ui/icons/Description";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import construction from "../assets/construction.jpeg";
import resume from "../assets/Trevor Flanigan Resume.pdf";
const StyledButton = withStyles({
  root: {
    marginTop: 0,
    border: `1px solid white`,
    borderRadius: "5px",
    height: "60%",
    flexGrow: 1,
    color: "white",
    "& svg": {
      fontSize: "4em",
    },
  },
})(IconButton);
class Construction extends Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
          overflow: "auto",
          backgroundImage: `url(${construction})`,
        }}
      >
        <p
          style={{
            fontFamily: "Spartan",
            textAlign: "center",
            fontWeight: "bolder",
            color: "white",
          }}
        >
          Mobile site is under construction. In the meantime...
        </p>
        <div style={{ alignSelf: "center", margin: "10px" }}>
          <Tooltip title="Resume">
            <StyledButton variant="outlined" download href={resume}>
              <Description fontSize="large" />
            </StyledButton>
          </Tooltip>
        </div>
        <div style={{ alignSelf: "center", margin: "10px" }}>
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
        </div>
        <div style={{ alignSelf: "center", margin: "10px" }}>
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
        <div style={{ alignSelf: "center", margin: "10px" }}>
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
        </div>
        <div style={{ alignSelf: "center", margin: "10px" }}>
          <Tooltip title="604-318-9666">
            <StyledButton variant="outlined" href="tel:604-318-9666">
              <Phone />
            </StyledButton>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default Construction;
