import React, { Component } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

export default class DrawerOption extends Component {
  render() {
    return (
      <ListItem
        button
        onClick={() => {
          console.log(this.props.name.toLowerCase());
          this.props.scroll(this.props.name.toLowerCase());
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
