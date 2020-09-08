import React, { Component } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from "@material-ui/core";

export default class DrawerOption extends Component {
  render() {
    const StyledListItem = withStyles({
      root: {
        transition: "color .3s",
        "&:hover": {
          color: "#ff3333",
        },
      },
    })(ListItem);
    return this.props.scrollToFlickity ? (
      <a
        href={this.props.keyID}
        style={{ color: "inherit", textDecoration: "none" }}
        onClick={this.props.intro}
      >
        <ListItem button>
          <ListItemIcon>
            <this.props.icon />
          </ListItemIcon>
          <ListItemText primary={this.props.name} />
        </ListItem>
      </a>
    ) : (
      <StyledListItem
        button
        onClick={() => {
          this.props.scroll(this.props.keyID);
        }}
      >
        <ListItemIcon>
          <this.props.icon />
        </ListItemIcon>
        <ListItemText primary={this.props.name} />
      </StyledListItem>
    );
  }
}
