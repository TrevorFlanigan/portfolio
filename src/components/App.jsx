import React from "react";
import Screen from "./Screen";
import "../styles/App.css";
import NavBar from "./NavBar";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./Theme";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.homeRef = React.createRef();
    this.workRef = React.createRef();
    this.schoolRef = React.createRef();
    this.projectsRef = React.createRef();
    this.languagesRef = React.createRef();
    this.contactRef = React.createRef();
  }

  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }

  scrollToRef = (ref) => {
    console.log("scrolloing");
    window.focus();
    window.scrollTo(0, ref.current.offsetTop);
    console.log(ref.current.offsetTop);
  };

  render() {
    const screenStyle = {
      scrollBehavior: "smooth",
    };
    return (
      <ThemeProvider theme={Theme}>
        <div
          className="app container"
          style={{ fontFamily: "Spartan", fontWeight: "normal" }}>
          <NavBar
            refs={{
              home: this.homeRef,
              work: this.workRef,
              school: this.schoolRef,
              projects: this.projectsRef,
              languages: this.languagesRef,
              contact: this.contactRef,
            }}
            scroll={this.scrollToRef}
          />
          <div id="home" style={{ paddingTop: "50px", marginTop: "-50px" }}>
            <Screen
              refProp={this.homeRef}
              style={screenStyle}
              id="home"></Screen>
          </div>
          <div
            id="work"
            style={{ paddingTop: "50px", marginTop: "-50px" }}
            ref={this.workRef}>
            <Screen id="work">Work</Screen>
          </div>
          <div
            id="school"
            style={{ paddingTop: "50px", marginTop: "-50px" }}
            ref={this.schoolRef}>
            <Screen id="school"></Screen>
          </div>
          <div
            ref={this.projectsRef}
            id="projects"
            style={{ paddingTop: "50px", marginTop: "-50px" }}>
            <Screen id="projects"></Screen>
          </div>
          <div
            ref={this.languagesRef}
            id="languages"
            style={{ paddingTop: "50px", marginTop: "-50px" }}>
            <Screen id="languages"></Screen>
          </div>
          <div
            ref={this.contactRef}
            id="contact"
            style={{ paddingTop: "50px", marginTop: "-50px" }}>
            <Screen id="contact"></Screen>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
