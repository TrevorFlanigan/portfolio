import React from "react";
import Section from "./Section";
import Divider from "./Divider";
import Screen from "./Screen";
import "../styles/App.css";
import Columns from "./Columns";
import NavBar from "./NavBar";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./Theme";
import Button from "@material-ui/core/Button";
class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <div
          className="app container"
          style={{ fontFamily: "Spartan", fontWeight: "normal" }}>
          {/* <Button variant="contained" color="primary">
            Hello
          </Button> */}
          <Screen>
            <NavBar />
            <Divider></Divider>
            <Section></Section>
          </Screen>
          <Screen>
            <Columns>hello</Columns>
          </Screen>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
