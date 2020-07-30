import React, { Component } from "react";
import "../styles/NavBar.css";
import {
  ThemeProvider,
  createStyles,
  withStyles,
  IconButton,
} from "@material-ui/core";
import Theme from "./Theme";
import Typography from "@material-ui/core/Typography";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import MenuIcon from "@material-ui/icons/Menu";
import Radium from "radium";

class NavBar extends Component {
  scroll = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };
  render() {
    const navIconSection = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "2px",
      paddingLeft: Theme.spacing(1),
      paddingRight: Theme.spacing(1),
      whiteSpace: "nowrap",
    };

    const contact = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "2px",
      paddingLeft: Theme.spacing(1),
      paddingRight: Theme.spacing(1),
      whiteSpace: "nowrap",
    };

    const navMenuSection = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      listStyleType: "none",
      transition: "visibility .1s",
      width: isWidthUp("md", this.props.width) ? "auto" : "0px",
      transitionDelay: "visibility .4s",
      visibility: isWidthUp("md", this.props.width) ? "visible" : "hidden",
    };

    const smallNavInfoSection = {
      display: "flex",
      paddingLeft: Theme.spacing(1),
      paddingRight: Theme.spacing(1),
    };

    const navLiElement = {
      padding: Theme.spacing(1),
    };

    const classes = this.props.classes;
    let fade = isWidthUp("md", this.props.width) ? "fadein" : "fadeout";
    return (
      <ThemeProvider theme={Theme}>
        <nav
          style={{
            zIndex: 1000,
            height: "50px",
            display: "flex",
            position: "sticky",
            top: 0,
            textAlign: "center",
            backgroundColor: Theme.palette.primary.main,
          }}>
          <div
            style={navIconSection}
            className="unselectable clickable"
            onClick={() => {
              this.scroll("home");
            }}>
            <Typography variant="h6">Trevor Flanigan</Typography>
          </div>
          <ol style={navMenuSection} className="mdonly">
            <li
              className={`${fade} unselectable clickable`}
              style={navLiElement}
              key={0}
              onClick={() => {
                this.scroll("work");
              }}>
              {" "}
              <Typography className={classes.NavItem} variant="subtitle1">
                Work
              </Typography>
            </li>
            <li
              className={`${fade} unselectable clickable`}
              style={navLiElement}
              key={1}
              onClick={() => {
                this.scroll("school");
              }}>
              <Typography className={classes.NavItem} variant="subtitle1">
                School
              </Typography>
            </li>
            <li
              className={`${fade} unselectable clickable`}
              style={navLiElement}
              key={2}
              onClick={() => {
                this.scroll("projects");
              }}>
              {" "}
              <Typography className={classes.NavItem} variant="subtitle1">
                Projects
              </Typography>
            </li>
            <li
              className={`${fade} unselectable clickable`}
              style={navLiElement}
              key={3}
              onClick={() => {
                this.scroll("languages");
              }}>
              <Typography className={classes.NavItem} variant="subtitle1">
                Languages and Frameworks
              </Typography>
            </li>
          </ol>
          <div style={smallNavInfoSection}>
            <div
              className={`${fade} unselectable clickable`}
              style={contact}
              key={5}
              onClick={() => {
                this.scroll("contact");
              }}>
              <Typography className={classes.NavItem} variant="subtitle1">
                Contact
              </Typography>
            </div>
            <Typography className={classes.NavItem} variant="subtitle1">
              <IconButton className={classes.icon}>
                <MenuIcon />
              </IconButton>
            </Typography>
          </div>
        </nav>
      </ThemeProvider>
    );
  }
}

const muiStyles = createStyles({
  icon: {
    order: 2,
    "&:hover": {
      color: "white",
      transition: "color .3s",
    },
  },
});

export default withWidth()(withStyles(muiStyles)(Radium(NavBar)));
