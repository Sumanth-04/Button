import React from "react";
import "./App.css";
import Button from "./components/Button/index";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <br />
        <div>
          <Button type='primary' label="Primary Button" /> {" "}
          <Button type='secondary' label="Secondary Button"  />{" "}
        </div>
      </div>
    );
  }
}

export default App;
