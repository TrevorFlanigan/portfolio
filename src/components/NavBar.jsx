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
  renderList = () => {
    return;
  };
  render() {
    const navIconSection = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ":hover": {
        cursor: "pointer",
        color: "white",
        transition: "color .3s",
      },
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
      ":hover": {
        cursor: "pointer",
        color: "white",
        transition: "color .3s",
      },
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
          }}>
          <div style={navIconSection}>
            <Typography variant="h6">Trevor Flanigan</Typography>
          </div>
          <ol style={navMenuSection} className="mdonly">
            <li className={fade} style={navLiElement} key={0}>
              <Typography className={classes.NavItem} variant="subtitle1">
                Work
              </Typography>
            </li>
            <li className={fade} style={navLiElement} key={1}>
              <Typography className={classes.NavItem} variant="subtitle1">
                School
              </Typography>
            </li>
            <li className={fade} style={navLiElement} key={2}>
              <Typography className={classes.NavItem} variant="subtitle1">
                Projects
              </Typography>
            </li>
            <li className={fade} style={navLiElement} key={3}>
              <Typography className={classes.NavItem} variant="subtitle1">
                Languages and Frameworks
              </Typography>
            </li>
            <li className={fade} style={navLiElement} key={4}>
              <Typography className={classes.NavItem} variant="subtitle1">
                Hackathons
              </Typography>
            </li>
          </ol>
          <div style={smallNavInfoSection}>
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
