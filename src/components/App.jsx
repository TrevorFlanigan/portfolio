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
    this.state = {
      theme: DarkTheme,
      moving: false,
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

  toggleTheme = () => {
    this.setState(() => ({
      theme: this.state.theme === DarkTheme ? LightTheme : DarkTheme,
    }));
  };

  focusSlide = (index, preventScroll = false) => {
    if (this.state.moving) return;
    this.setState(() => ({ moving: true }));
    this.slides[index].scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      this.slides[index].focus({ preventScroll: preventScroll });
      this.setState(() => ({ moving: false }));
    }, 600);
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

    this.slides = document.querySelectorAll(".flickitySlide");
    this.slides.forEach((element, i) =>
      element.addEventListener("focus", () =>
        this.setState(() => ({ refIndex: i }))
      )
    );
    this.focusSlide(0, false);
  }
  handleKeyDown = (event) => {
    if (event.keyCode == 38 || event.keyCode == 40) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (this.state.moving) return;

    if (event.keyCode === 38) {
      //up key
      let nextIndex =
        this.state.refIndex - 1 >= 0 ? this.state.refIndex - 1 : 0;
      this.setState(() => ({
        refIndex: nextIndex,
      }));
      this.focusSlide(nextIndex);
    } else if (event.keyCode === 40) {
      //down key
      let prevIndex =
        this.state.refIndex + 1 < this.state.refs.length
          ? this.state.refIndex + 1
          : 0;
      this.setState(() => ({
        refIndex: prevIndex,
      }));
      this.focusSlide(prevIndex);
    }
  };

  render() {
    const screenStyle = {
      scrollBehavior: "smooth",
      backgroundColor: this.state.theme.palette.primary.main,
    };

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
          />
          <div
            style={{
              ...sectionStyle,
              marginBottom: "50px",
              backgroundColor: this.state.theme.palette.primary,
            }}
          >
            <ScreenCollection ignoreNav refObj={this.state.refs[0]}>
              <Screen
                screenStyle={{
                  ...screenStyle,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: this.state.theme.palette.primary.main,
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
                  backgroundColor: this.state.theme.palette.primary.main,
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
                  backgroundColor: this.state.theme.palette.primary.main,
                }}
              >
                <Home2 onClick={() => this.focusSlide(1, false)} />
              </Screen>
            </ScreenCollection>
          </div>
          <div id="work" style={sectionStyle} ref={this.workRef}>
            <ScreenCollection refObj={this.state.refs[1]}>
              <Screen
                refProp={this.homeRef}
                screenStyle={{
                  ...screenStyle,
                  backgroundColor: this.state.theme.palette.primary.main,
                }}
                id="work0"
              >
                <Work0 />
              </Screen>
              <Screen
                refProp={this.homeRef}
                screenStyle={{ ...screenStyle }}
                id="work1"
              >
                Looking to hire?
              </Screen>
              <Screen
                refProp={this.homeRef}
                screenStyle={{ ...screenStyle, backgroundColor: "grey" }}
                id="work2"
              >
                Hire me
              </Screen>
              <Screen
                refProp={this.homeRef}
                screenStyle={{ ...screenStyle, backgroundColor: "beige" }}
                id="work3"
              >
                Please
              </Screen>
            </ScreenCollection>
          </div>
          <div id="school" style={sectionStyle} ref={this.schoolRef}>
            <ScreenCollection refObj={this.state.refs[2]}>
              <Screen screenStyle={{ ...screenStyle }} id="school">
                school
              </Screen>
              <Screen id="school" screenStyle={{ ...screenStyle }}>
                school2
              </Screen>
            </ScreenCollection>
          </div>
          <div ref={this.projectsRef} id="projects" style={sectionStyle}>
            <ScreenCollection refObj={this.state.refs[3]}>
              <Screen id="projects" screenStyle={{ ...screenStyle }}>
                projects
              </Screen>
              <Screen id="projects" screenStyle={{ ...screenStyle }}>
                projects
              </Screen>
            </ScreenCollection>
          </div>
          <div ref={this.languagesRef} id="languages" style={sectionStyle}>
            <ScreenCollection refObj={this.state.refs[4]}>
              <Screen id="languages" screenStyle={{ ...screenStyle }}>
                languages
              </Screen>
              <Screen id="languages" screenStyle={{ ...screenStyle }}>
                languages
              </Screen>
            </ScreenCollection>
          </div>
          <div ref={this.contactRef} id="contact" style={sectionStyle}>
            <ScreenCollection refObj={this.state.refs[5]}>
              <Screen id="contact" screenStyle={{ ...screenStyle }}>
                contact me
              </Screen>
            </ScreenCollection>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
