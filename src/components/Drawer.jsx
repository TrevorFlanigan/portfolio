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
        onClose={() => this.props.toggleDrawer(false)}
        onOpen={this.props.toggleDrawer}
      >
        <List>
          <Collapse in={big}>
            <ListSubheader disableSticky={false}>Work</ListSubheader>
          </Collapse>

          {big ? (
            <DrawerOption
              closeDrawer={this.props.toggleDrawer}
              name="SecureKey"
              scroll={this.props.scroll}
              icon={SecureKeyIcon}
            />
          ) : (
            <DrawerOption
              closeDrawer={this.props.toggleDrawer}
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
                closeDrawer={this.props.toggleDrawer}
                name="Launchpad"
                scroll={this.props.scroll}
                icon={LaunchpadIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Meetable"
                scroll={this.props.scroll}
                icon={MeetableIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Courses"
                scroll={this.props.scroll}
                icon={UBCIcon}
              />
            </>
          ) : (
            <DrawerOption
              closeDrawer={this.props.toggleDrawer}
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
                closeDrawer={this.props.toggleDrawer}
                name="Sync"
                scroll={this.props.scroll}
                icon={SyncIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Ravenous"
                scroll={this.props.scroll}
                icon={RavenousIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Jammming"
                scroll={this.props.scroll}
                icon={JammmingIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Hacker Match"
                scroll={this.props.scroll}
                icon={HackerMatchIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Stock Watcher"
                scroll={this.props.scroll}
                icon={StockWatchIcon}
              />
            </>
          ) : (
            <DrawerOption
              closeDrawer={this.props.toggleDrawer}
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
                closeDrawer={this.props.toggleDrawer}
                name="React"
                scroll={this.props.scroll}
                icon={ReactIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Node.js"
                scroll={this.props.scroll}
                icon={NodeIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="MongoDB"
                scroll={this.props.scroll}
                icon={MongoIcon}
              />
            </>
          ) : (
            <DrawerOption
              closeDrawer={this.props.toggleDrawer}
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
