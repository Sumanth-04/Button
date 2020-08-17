import React from "react";
import "./App.css";
import Button from "./components/Button/index";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <br />
        <div>
          <Button label="Primary Button"  /> {" "}
          <Button className='secondary' label="Secondary Button"  />{" "}
          <Button className='secondary' label="Secondary Hover"  />
        </div>
      </div>
    );
  }
}

export default App;
