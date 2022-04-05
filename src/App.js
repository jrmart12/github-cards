import React, { Component } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

// function App() {
//   return <div className="App"></div>;
// }

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   };
  // }

  state = {
    profiles: [],
  };

  addNewProfile = (profile) => {
    console.log(profile);
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profile],
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <List profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
