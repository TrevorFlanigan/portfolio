import React, { Component } from "react";
import DrawerOption from "./DrawerOption";
import {
  SwipeableDrawer,
  List,
  ListSubheader,
  Collapse,
  withTheme,
  withStyles,
  makeStyles,
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
    const { theme } = this.props;
    let StyledList = withStyles({
      root: {
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
      },
    })(List);
    let StyledListSubheader = withStyles({
      root: {
        color: theme.palette.primary.contrastText,
      },
    })(ListSubheader);
    let StyledWorkIcon = withStyles({
      root: {
        color: theme.palette.primary.contrastText,
      },
    })(WorkIcon);
    let StyledSchoolIcon = withStyles({
      root: {
        color: theme.palette.primary.contrastText,
      },
    })(SchoolIcon);

    let StyledCodeIcon = withStyles({
      root: {
        color: theme.palette.primary.contrastText,
      },
    })(CodeIcon);

    return (
      <SwipeableDrawer
        anchor="right"
        open={this.props.drawer}
        onClose={() => this.props.toggleDrawer(false)}
        onOpen={this.props.toggleDrawer}
      >
        <StyledList>
          <Collapse in={big}>
            <StyledListSubheader disableSticky={false}>
              Work
            </StyledListSubheader>
          </Collapse>

          {big ? (
            <DrawerOption
              closeDrawer={this.props.toggleDrawer}
              name="SecureKey"
              scrollToFlickity
              icon={SecureKeyIcon}
              keyID={"#work0"}
            />
          ) : (
            <DrawerOption
              closeDrawer={this.props.toggleDrawer}
              name="Work"
              keyID={1}
              scroll={this.props.scroll}
              icon={StyledWorkIcon}
              color={theme.palette.primary.contrastText}
            />
          )}
          <Collapse in={big}>
            <StyledListSubheader>School</StyledListSubheader>
          </Collapse>

          {big ? (
            <>
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Cool Projects"
                scrollToFlickity
                keyID={"#school1"}
                scroll={this.props.scroll}
                icon={UBCIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Launchpad"
                scrollToFlickity
                keyID={"#school2"}
                scroll={this.props.scroll}
                icon={LaunchpadIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Meetable"
                scrollToFlickity
                keyID={"#school3"}
                scroll={this.props.scroll}
                icon={MeetableIcon}
              />
            </>
          ) : (
            <DrawerOption
              closeDrawer={this.props.toggleDrawer}
              name="School"
              scroll={this.props.scroll}
              keyID={2}
              icon={StyledSchoolIcon}
            />
          )}
          <Collapse in={big}>
            <StyledListSubheader>Projects</StyledListSubheader>
          </Collapse>

          {big ? (
            <>
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Sync"
                scrollToFlickity
                keyID={"#projects0"}
                scroll={this.props.scroll}
                icon={SyncIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Ravenous"
                scrollToFlickity
                keyID={"#projects1"}
                scroll={this.props.scroll}
                icon={RavenousIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Jammming"
                scrollToFlickity
                keyID={"#projects2"}
                scroll={this.props.scroll}
                icon={JammmingIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Hacker Match"
                scrollToFlickity
                keyID={"#projects3"}
                scroll={this.props.scroll}
                icon={HackerMatchIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Stock Watcher"
                scrollToFlickity
                keyID={"#projects4"}
                scroll={this.props.scroll}
                icon={StockWatchIcon}
              />
            </>
          ) : (
            <DrawerOption
              closeDrawer={this.props.toggleDrawer}
              name="Projects"
              keyID={3}
              scroll={this.props.scroll}
              icon={StyledCodeIcon}
            />
          )}
          <Collapse in={big}>
            <StyledListSubheader>Languages and Frameworks</StyledListSubheader>
          </Collapse>

          {big ? (
            <>
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="React"
                scrollToFlickity
                keyID={"#languages0"}
                scroll={this.props.scroll}
                icon={ReactIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="Node.js"
                scrollToFlickity
                keyID={"#languages1"}
                scroll={this.props.scroll}
                icon={NodeIcon}
              />
              <DrawerOption
                closeDrawer={this.props.toggleDrawer}
                name="MongoDB"
                scrollToFlickity
                keyID={"#languages2"}
                scroll={this.props.scroll}
                icon={MongoIcon}
              />
            </>
          ) : (
            <DrawerOption
              closeDrawer={this.props.toggleDrawer}
              name="Languages"
              keyID={4}
              scroll={this.props.scroll}
              icon={ReactIcon}
            />
          )}
        </StyledList>
      </SwipeableDrawer>
    );
  }
}

export default withTheme(withWidth()(Drawer));
