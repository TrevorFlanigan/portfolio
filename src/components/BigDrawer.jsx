import React, { Component } from "react";
import DrawerOption from "./DrawerOption";
import { SwipeableDrawer, List, ListSubheader } from "@material-ui/core";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import CodeIcon from "@material-ui/icons/Code";

class BigDrawer extends Component {
  state = {
    drawer: false,
  };
  render() {
    return (
      <SwipeableDrawer
        anchor="right"
        open={this.props.drawer}
        onClose={this.props.toggleDrawer}
        onOpen={this.props.toggleDrawer}
      >
        <List>
          <ListSubheader>Work</ListSubheader>
          <DrawerOption
            name="Work"
            scroll={this.props.scroll}
            icon={WorkIcon}
          />
          <ListSubheader>School</ListSubheader>

          <DrawerOption
            name="School"
            scroll={this.props.scroll}
            icon={SchoolIcon}
          />
          <ListSubheader>Projects</ListSubheader>

          <DrawerOption
            name="Projects"
            scroll={this.props.scroll}
            icon={CodeIcon}
          />
          <ListSubheader>Languages</ListSubheader>

          <DrawerOption
            name="Languages"
            scroll={this.props.scroll}
            icon={SchoolIcon}
          />
        </List>
      </SwipeableDrawer>
    );
  }
}

export default BigDrawer;
