import React, { Component } from "react";
import "../styles/NavBar.css";
import { withStyles, IconButton, withTheme, Switch } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import MenuIcon from "@material-ui/icons/Menu";
import Radium from "radium";
import Drawer from "./Drawer";
class NavBar extends Component {
  state = {
    drawer: false,
    theme: true,
  };

  toggleDrawer = (state) => {
    if (typeof state !== "undefined") this.setState(() => ({ drawer: state }));
    else this.setState(() => ({ drawer: !this.state.drawer }));
  };

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
    this.props.toggleTheme();
  };
  render() {
    const { theme } = this.props;

    const navIconSection = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "2px",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      whiteSpace: "nowrap",
    };

    const contact = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "2px",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
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
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    };

    const navLiElement = {
      padding: theme.spacing(1),
    };
    let fade = isWidthUp("md", this.props.width) ? "fadein" : "fadeout";
    const ThemedTypography = withStyles({
      root: {
        cursor: "pointer",
        color: theme.palette.primary.contrastText,
        "&:hover": {
          color: theme.palette.primary.light,
        },
        transition: "color .1s",
      },
    })(Typography);
    const StyledIconButton = withStyles({
      root: {
        order: 2,
        color: theme.palette.primary.contrastText,
        "&:hover": {
          color: theme.palette.primary.light,
        },
        transition: "color .1s",
      },
    })(IconButton);
    const StyledSwitch = withStyles({
      root: {
        transition: "background-color 2s, color 2s",
      },
      track: {
        border: `1px solid ${theme.palette.primary.contrastText}`,
        backgroundColor: theme.palette.primary.contrastText,
      },
      thumb: {
        transition: "background-color 2s, color 2s",
        backgroundColor: theme.palette.primary.contrastText,
      },
    })(Switch);

    return (
      <>
        <Drawer
          drawer={this.state.drawer}
          toggleDrawer={this.toggleDrawer}
          scroll={this.props.scroll}
          intro={this.props.intro}
          scrollSmall={this.props.scrollSmall}
        />

        <nav
          style={{
            zIndex: 1000,
            height: "50px",
            width: "100%",
            display: "flex",
            position: "fixed",
            top: 0,
            textAlign: "center",
            backgroundColor: theme.palette.primary.main,
            transition: "background-color 2s, color 2s",
          }}
        >
          <div
            style={{ ...navIconSection }}
            className="unselectable"
            onClick={() => {
              this.props.intro();
              this.props.scroll(0);
            }}
          >
            <ThemedTypography variant="h6">Trevor Flanigan</ThemedTypography>
          </div>
          <ol style={navMenuSection} className="mdonly">
            <li
              className={`${fade} unselectable clickable`}
              style={navLiElement}
              key={0}
              onClick={() => {
                this.props.intro();
                this.props.scroll(1);
              }}
            >
              {" "}
              <ThemedTypography variant="subtitle1">Work</ThemedTypography>
            </li>
            <li
              className={`${fade} unselectable clickable`}
              style={navLiElement}
              key={1}
              onClick={() => {
                this.props.intro();
                this.props.scroll(2);
              }}
            >
              <ThemedTypography variant="subtitle1">School</ThemedTypography>
            </li>
            <li
              className={`${fade} unselectable clickable`}
              style={navLiElement}
              key={2}
              onClick={() => {
                this.props.intro();
                this.props.scroll(3);
              }}
            >
              {" "}
              <ThemedTypography variant="subtitle1">Projects</ThemedTypography>
            </li>
            <li
              className={`${fade} unselectable clickable`}
              style={navLiElement}
              key={3}
              onClick={() => {
                this.props.intro();
                this.props.scroll(4);
              }}
            >
              <ThemedTypography variant="subtitle1">
                Languages and Frameworks
              </ThemedTypography>
            </li>
          </ol>
          <div style={smallNavInfoSection}>
            <div
              className={`${fade} unselectable clickable`}
              style={contact}
              key={5}
            >
              <StyledSwitch
                onChange={this.handleChange}
                checked={this.state.theme}
                name="theme"
                color="default"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />

              <ThemedTypography
                variant="subtitle1"
                onClick={() => {
                  this.props.intro();
                  this.props.scroll(5);
                }}
              >
                Contact
              </ThemedTypography>
            </div>
            <ThemedTypography variant="subtitle1">
              <StyledIconButton onClick={this.toggleDrawer}>
                <MenuIcon />
              </StyledIconButton>
            </ThemedTypography>
          </div>
        </nav>
      </>
    );
  }
}

export default withWidth()(withTheme(Radium(NavBar)));
