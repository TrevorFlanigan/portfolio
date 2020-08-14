import React from "react";
import Screen from "./Screen";
import "../styles/App.css";
import NavBar from "./NavBar";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./Theme";
import ScreenCollection from "./ScreenCollection";
import ReactDom from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.homeRef = React.createRef();
    this.workRef = React.createRef();
    this.schoolRef = React.createRef();
    this.projectsRef = React.createRef();
    this.languagesRef = React.createRef();
    this.contactRef = React.createRef();

    this.state = {
      refIndex: 0,
      refs: [
        this.homeRef,
        this.workRef,
        this.schoolRef,
        this.projectsRef,
        this.languagesRef,
        this.contactRef,
      ],
      ids: ["home", "work", "school", "projects", "languages", "contact"],
    };
  }

  focusByID = (id) => {
    document.getElementById(id).focus();
  };

  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    this.focusByID(this.state.ids[0]);
  }
  handleKeyDown = (event) => {
    if (event.keyCode === 38) {
      //up key
      let nextIndex = this.state.refIndex - 1 > 0 ? this.state.refIndex - 1 : 0;
      this.setState(() => ({
        refIndex: nextIndex,
      }));
      console.log(this.state.ids);
      console.log(this.state.ids[nextIndex]);
      this.focusByID(this.state.ids[nextIndex]);
    } else if (event.keyCode === 40) {
      //down key
      let prevIndex =
        this.state.refIndex + 1 < this.state.refs.length
          ? this.state.refIndex + 1
          : this.state.refs.length - 1;
      this.setState(() => ({
        refIndex:
          this.state.refIndex + 1 < this.state.refs.length
            ? this.state.refIndex + 1
            : this.state.refs.length - 1,
      }));
      console.log(this.state.ids);
      console.log(this.state.ids[prevIndex]);
      this.focusByID(this.state.ids[prevIndex]);
    }
  };

  render() {
    const screenStyle = {
      scrollBehavior: "smooth",
    };

    const sectionStyle = {
      paddingTop: "50px",
      marginTop: "-50px",
      scrollSnapAlign: "start",
    };
    return (
      <ThemeProvider theme={Theme}>
        <div
          className="app container"
          style={{
            fontFamily: "Spartan",
            fontWeight: "normal",
            scrollSnapType: "y mandatory",
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
          />
          <div id="home" style={{ ...sectionStyle, marginBottom: "50px" }}>
            <ScreenCollection ignoreNav refObj={this.state.refs[0]}>
              <Screen
                style={{ ...screenStyle, backgroundColor: "red" }}
                id="home"
              >
                home0
              </Screen>
              <Screen
                refProp={this.homeRef}
                style={{ ...screenStyle, backgroundColor: "green" }}
                id="home"
              >
                home1
              </Screen>
              <Screen
                refProp={this.homeRef}
                style={{ ...screenStyle, backgroundColor: "blue" }}
                id="home"
              >
                home2
              </Screen>
              <Screen
                refProp={this.homeRef}
                style={{ ...screenStyle, backgroundColor: "grey" }}
                id="home"
              >
                home3
              </Screen>
              <Screen
                refProp={this.homeRef}
                style={{ ...screenStyle, backgroundColor: "beige" }}
                id="home"
              >
                home4
              </Screen>
              <Screen
                refProp={this.homeRef}
                style={{ ...screenStyle, backgroundColor: "yellow" }}
                id="home"
              >
                home5
              </Screen>
            </ScreenCollection>
          </div>
          <div id="work" style={sectionStyle} ref={this.workRef}>
            <ScreenCollection refObj={this.state.refs[1]}>
              <Screen
                refProp={this.homeRef}
                style={{ ...screenStyle, backgroundColor: "green" }}
                id="home"
              >
                SecureKey
              </Screen>
              <Screen
                refProp={this.homeRef}
                style={{ ...screenStyle, backgroundColor: "blue" }}
                id="home"
              >
                Looking to hire?
              </Screen>
              <Screen
                refProp={this.homeRef}
                style={{ ...screenStyle, backgroundColor: "grey" }}
                id="home"
              >
                Hire me
              </Screen>
              <Screen
                refProp={this.homeRef}
                style={{ ...screenStyle, backgroundColor: "beige" }}
                id="home"
              >
                Please
              </Screen>
            </ScreenCollection>
          </div>
          <div id="school" style={sectionStyle} ref={this.schoolRef}>
            <ScreenCollection refObj={this.state.refs[2]}>
              <Screen id="school">school</Screen>
              <Screen id="school">school2</Screen>
            </ScreenCollection>
          </div>
          <div ref={this.projectsRef} id="projects" style={sectionStyle}>
            <ScreenCollection refObj={this.state.refs[3]}>
              <Screen id="projects">projects</Screen>
              <Screen id="projects">projects</Screen>
            </ScreenCollection>
          </div>
          <div ref={this.languagesRef} id="languages" style={sectionStyle}>
            <ScreenCollection refObj={this.state.refs[4]}>
              <Screen id="languages">languages</Screen>
              <Screen id="languages">languages</Screen>
            </ScreenCollection>
          </div>
          <div ref={this.contactRef} id="contact" style={sectionStyle}>
            <ScreenCollection refObj={this.state.refs[5]}>
              <Screen id="contact">contact me</Screen>
            </ScreenCollection>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
