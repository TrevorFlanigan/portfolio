import React, { Component } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

export default class DrawerOption extends Component {
  render() {
    return (
      <ListItem
        button
        onClick={() => {
          this.props.scroll(this.props.keyID);
        }}
      >
        <ListItemIcon>
          <this.props.icon />
        </ListItemIcon>
        <ListItemText primary={this.props.name} />
      </ListItem>
    );
  }
}
