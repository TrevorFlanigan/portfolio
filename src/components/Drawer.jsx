import React, { Component } from "react";
import DrawerOption from "./DrawerOption";
import {
  SwipeableDrawer,
  List,
  ListSubheader,
  Collapse,
} from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import SchoolIcon from "@material-ui/icons/School";
import CodeIcon from "@material-ui/icons/Code";
import Icons from "./Icons";
const {
  NodeIcon,
  HackerMatchIcon,
  JammmingIcon,
  UBCIcon,
  ReactIcon,
  MeetableIcon,
  MongoIcon,
  LaunchpadIcon,
  SecureKeyIcon,
  StockWatchIcon,
  RavenousIcon,
  SyncIcon,
} = Icons;
class Drawer extends Component {
  render() {
    let big = isWidthUp("md", this.props.width);
    return (
      <SwipeableDrawer
        anchor="right"
        open={this.props.drawer}
        onClose={this.props.toggleDrawer}
        onOpen={this.props.toggleDrawer}
      >
        <List>
          <Collapse in={big}>
            <ListSubheader disableSticky={false}>Work</ListSubheader>
          </Collapse>

          {big ? (
            <DrawerOption
              name="SecureKey"
              scroll={this.props.scroll}
              icon={SecureKeyIcon}
            />
          ) : (
            <DrawerOption
              name="Work"
              scroll={this.props.scroll}
              icon={WorkIcon}
            />
          )}
          <Collapse in={big}>
            <ListSubheader>School</ListSubheader>
          </Collapse>

          {big ? (
            <>
              <DrawerOption
                name="Launchpad"
                scroll={this.props.scroll}
                icon={LaunchpadIcon}
              />
              <DrawerOption
                name="Meetable"
                scroll={this.props.scroll}
                icon={MeetableIcon}
              />
              <DrawerOption
                name="Courses"
                scroll={this.props.scroll}
                icon={UBCIcon}
              />
            </>
          ) : (
            <DrawerOption
              name="School"
              scroll={this.props.scroll}
              icon={SchoolIcon}
            />
          )}
          <Collapse in={big}>
            <ListSubheader>Projects</ListSubheader>
          </Collapse>

          {big ? (
            <>
              <DrawerOption
                name="Sync"
                scroll={this.props.scroll}
                icon={SyncIcon}
              />
              <DrawerOption
                name="Ravenous"
                scroll={this.props.scroll}
                icon={RavenousIcon}
              />
              <DrawerOption
                name="Jammming"
                scroll={this.props.scroll}
                icon={JammmingIcon}
              />
              <DrawerOption
                name="Hacker Match"
                scroll={this.props.scroll}
                icon={HackerMatchIcon}
              />
              <DrawerOption
                name="Stock Watcher"
                scroll={this.props.scroll}
                icon={StockWatchIcon}
              />
            </>
          ) : (
            <DrawerOption
              name="Projects"
              scroll={this.props.scroll}
              icon={CodeIcon}
            />
          )}
          <Collapse in={big}>
            <ListSubheader>Languages and Frameworks</ListSubheader>
          </Collapse>

          {big ? (
            <>
              <DrawerOption
                name="React"
                scroll={this.props.scroll}
                icon={ReactIcon}
              />
              <DrawerOption
                name="Node.js"
                scroll={this.props.scroll}
                icon={NodeIcon}
              />
              <DrawerOption
                name="MongoDB"
                scroll={this.props.scroll}
                icon={MongoIcon}
              />
            </>
          ) : (
            <DrawerOption
              name="Languages"
              scroll={this.props.scroll}
              icon={ReactIcon}
            />
          )}
        </List>
      </SwipeableDrawer>
    );
  }
}

export default withWidth()(Drawer);
