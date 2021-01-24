import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInput from "./UserInput/UserInput.js";
import UserOutput from "./UserOutput/UserOutput.js";

class App extends React.Component {
  state = {
    userName: "Yash",
  };

  userNameChangedeventHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <UserInput
          changed={this.userNameChangedeventHandler}
          value={this.state.userName}
        />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
