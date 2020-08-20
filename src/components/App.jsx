import React from "react";
import Screen from "./Screen";
import "../styles/App.css";
import NavBar from "./NavBar";
import { ThemeProvider } from "@material-ui/styles";
import LightTheme from "./LightTheme";
import ScreenCollection from "./ScreenCollection";
import Home0 from "./homeScreens/Home0";
import Home1 from "./homeScreens/Home1";
import Home2 from "./homeScreens/Home2";
import DarkTheme from "./DarkTheme";
import Work0 from "./workScreens/Work0";
import ContentScreen from "./ContentScreen";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.homeRef = React.createRef();
    this.workRef = React.createRef();
    this.schoolRef = React.createRef();
    this.projectsRef = React.createRef();
    this.languagesRef = React.createRef();
    this.contactRef = React.createRef();
    this.slides = null;
    this.keys = {
      37: 1,
      38: 1,
      39: 1,
      40: 1,
      32: 1,
      33: 1,
      34: 1,
      35: 1,
      36: 1,
    };
    this.state = {
      currOnScreen: "home",
      loaded: false,
      theme: DarkTheme,
      moving: false,
      movingID: "",
      refIndex: 0,
      refs: [
        this.homeRef,
        this.workRef,
        this.schoolRef,
        this.projectsRef,
        this.languagesRef,
        this.contactRef,
      ],
      intro: false,
      ids: ["home", "work", "school", "projects", "languages", "contact"],
    };
  }

  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36

  preventDefault = (e) => {
    e.preventDefault();
  };

  preventDefaultForScrollKeys = (e) => {
    if (this.keys[e.keyCode]) {
      this.preventDefault(e);
      return false;
    }
  };

  // modern Chrome requires { passive: false } when adding event

  // call this to Disable
  disableScroll = () => {
    window.addEventListener("DOMMouseScroll", this.preventDefault, false); // older FF
    window.addEventListener(
      this.wheelEvent,
      this.preventDefault,
      this.wheelOpt
    ); // modern desktop
    window.addEventListener("touchmove", this.preventDefault, this.wheelOpt); // mobile
    window.addEventListener("keydown", this.preventDefaultForScrollKeys, false);
  };

  // call this to Enable
  enableScroll = () => {
    window.removeEventListener("DOMMouseScroll", this.preventDefault, false);
    window.removeEventListener(
      this.wheelEvent,
      this.preventDefault,
      this.wheelOpt
    );
    window.removeEventListener("touchmove", this.preventDefault, this.wheelOpt);
    window.removeEventListener(
      "keydown",
      this.preventDefaultForScrollKeys,
      false
    );
  };

  toggleTheme = () => {
    this.setState(() => ({
      theme: this.state.theme === DarkTheme ? LightTheme : DarkTheme,
    }));
  };

  handleScroll = (event) => {
    event.preventDefault();
  };

  enteredCallback = (id) => {
    this.setState({ currOnScreen: id });
    if (this.state.movingID !== id) return;
    document.getElementById(id).focus();
    this.enableScroll();
    this.setState(() => ({ refIndex: this.state.ids.indexOf(id) }));
    this.setState(() => ({ moving: false }));
  };

  focusSlide = (index) => {
    if (this.state.currOnScreen === this.state.ids[index]) return false;
    if (this.state.moving) return false;
    this.disableScroll();
    this.setState(() => ({
      moving: true,
      movingID: this.state.ids[index],
    }));
    document
      .getElementById(this.state.ids[index])
      .scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    var supportsPassive = false;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            supportsPassive = true;
          },
        })
      );
    } catch (e) {}

    this.wheelOpt = supportsPassive ? { passive: false } : false;
    this.wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
    window.addEventListener(
      "keydown",
      function (e) {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault();
        }
      },
      false
    );
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        console.log("anchor clicked");
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
    this.setState(() => ({ loaded: true }));
  }
  handleKeyDown = (event) => {
    if (this.state.moving) return;
    console.log("keydown event");
    if (event.keyCode == 38 || event.keyCode == 40) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (event.keyCode === 38) {
      //up key
      let nextIndex =
        this.state.refIndex - 1 >= 0 ? this.state.refIndex - 1 : 0;

      if (!this.focusSlide(nextIndex)) return;
      this.setState(() => ({
        refIndex: nextIndex,
      }));
    } else if (event.keyCode === 40) {
      //down key
      let prevIndex =
        this.state.refIndex + 1 < this.state.refs.length
          ? this.state.refIndex + 1
          : 0;

      if (!this.focusSlide(prevIndex)) return;
      this.setState(() => ({
        refIndex: prevIndex,
      }));
    }
  };

  doneIntro = () => {
    this.setState({ intro: true });
  };

  render() {
    const screenStyle = {
      scrollBehavior: "smooth",
      backgroundColor: this.state.theme.palette.primary.main,
      transition: "background-color 2s, color 2s",
    };
    console.log(this.state.movingID);
    const sectionStyle = {
      paddingTop: "50px",
      marginTop: "-50px",
      scrollSnapAlign: "start",
    };
    return (
      <ThemeProvider theme={this.state.theme}>
        <div
          className="app container"
          style={{
            fontFamily: "Spartan",
            fontWeight: "normal",
            scrollSnapType: "y mandatory",
            overflowY: this.state.intro ? "auto" : "hidden",
          }}
          onKeyDown={this.handleKeyDown}
        >
          <NavBar
            refs={{
              home: this.homeRef,
              work: this.workRef,
              school: this.schoolRef,
              projects: this.projectsRef,
              languages: this.languagesRef,
              contact: this.contactRef,
            }}
            scroll={this.focusSlide}
            toggleTheme={this.toggleTheme}
            intro={this.doneIntro}
          />
          <div
            style={{
              ...sectionStyle,
              marginBottom: "50px",
            }}
          >
            <ScreenCollection
              id="home"
              ignoreNav
              refObj={this.state.refs[0]}
              entered={this.enteredCallback}
            >
              <Screen
                screenStyle={{
                  ...screenStyle,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Home0 />
              </Screen>
              <Screen
                refProp={this.homeRef}
                screenStyle={{
                  display: "flex",
                  alignItems: "center",
                  ...screenStyle,
                }}
              >
                <Home1 />
              </Screen>
              <Screen
                refProp={this.homeRef}
                screenStyle={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  ...screenStyle,
                }}
              >
                <Home2
                  onClick={() => this.focusSlide(1, false)}
                  intro={this.doneIntro}
                />
              </Screen>
            </ScreenCollection>
          </div>
          {this.state.loaded && (
            <>
              <div style={sectionStyle} ref={this.workRef}>
                <ScreenCollection
                  id="work"
                  refObj={this.state.refs[1]}
                  entered={this.enteredCallback}
                >
                  <Screen
                    refProp={this.homeRef}
                    screenStyle={{
                      ...screenStyle,
                    }}
                    id="work0"
                  >
                    <Work0
                      style={{ transition: "color 2s, background-color 2s" }}
                    />
                  </Screen>
                  <Screen
                    refProp={this.homeRef}
                    screenStyle={{ ...screenStyle }}
                    id="work1"
                  >
                    <ContentScreen transition="slideright rotate fadein">
                      Work1
                    </ContentScreen>
                  </Screen>
                  <Screen
                    refProp={this.homeRef}
                    screenStyle={{ ...screenStyle }}
                    id="work2"
                  >
                    <ContentScreen transition="slideright rotate fadein">
                      Work2
                    </ContentScreen>
                  </Screen>
                </ScreenCollection>
              </div>
              <div style={sectionStyle} ref={this.schoolRef}>
                <ScreenCollection
                  id="school"
                  refObj={this.state.refs[2]}
                  entered={this.enteredCallback}
                >
                  <Screen screenStyle={{ ...screenStyle }} id="school0">
                    <ContentScreen transition="slideright rotate fadein">
                      School
                    </ContentScreen>
                  </Screen>
                  <Screen screenStyle={{ ...screenStyle }} id="school1">
                    <ContentScreen transition="slideright rotate fadein">
                      Launchpad
                    </ContentScreen>
                  </Screen>
                  <Screen screenStyle={{ ...screenStyle }} id="school2">
                    <ContentScreen transition="slideright rotate fadein">
                      Meetable
                    </ContentScreen>
                  </Screen>
                  <Screen screenStyle={{ ...screenStyle }} id="school3">
                    <ContentScreen transition="slideright rotate fadein">
                      Courses
                    </ContentScreen>
                  </Screen>
                </ScreenCollection>
              </div>
              <div ref={this.projectsRef} id="projects" style={sectionStyle}>
                <ScreenCollection
                  id="projects"
                  refObj={this.state.refs[3]}
                  entered={this.enteredCallback}
                >
                  <Screen id="projects0" screenStyle={{ ...screenStyle }}>
                    <ContentScreen transition="slideright rotate fadein">
                      Sync
                    </ContentScreen>
                  </Screen>
                  <Screen id="projects1" screenStyle={{ ...screenStyle }}>
                    <ContentScreen transition="slideright rotate fadein">
                      Ravenous
                    </ContentScreen>
                  </Screen>
                  <Screen id="projects2" screenStyle={{ ...screenStyle }}>
                    <ContentScreen transition="slideright rotate fadein">
                      Jammming
                    </ContentScreen>
                  </Screen>
                  <Screen id="projects3" screenStyle={{ ...screenStyle }}>
                    <ContentScreen transition="slideright rotate fadein">
                      Hacker Match
                    </ContentScreen>
                  </Screen>
                  <Screen id="projects4" screenStyle={{ ...screenStyle }}>
                    <ContentScreen transition="slideright rotate fadein">
                      Stock Watcher
                    </ContentScreen>
                  </Screen>
                </ScreenCollection>
              </div>
              <div ref={this.languagesRef} style={sectionStyle}>
                <ScreenCollection
                  id="languages"
                  refObj={this.state.refs[4]}
                  entered={this.enteredCallback}
                >
                  <Screen id="languages0" screenStyle={{ ...screenStyle }}>
                    languages
                  </Screen>
                  <Screen id="languages1" screenStyle={{ ...screenStyle }}>
                    languages
                  </Screen>
                  <Screen id="languages2" screenStyle={{ ...screenStyle }}>
                    languages
                  </Screen>
                </ScreenCollection>
              </div>
              <div ref={this.contactRef} style={sectionStyle}>
                <ScreenCollection
                  id="contact"
                  refObj={this.state.refs[5]}
                  entered={this.enteredCallback}
                >
                  <Screen id="contact" screenStyle={{ ...screenStyle }}>
                    contact me
                  </Screen>
                </ScreenCollection>
              </div>
            </>
          )}{" "}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
