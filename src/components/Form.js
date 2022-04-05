import React, { Component } from "react";

export default class Form extends Component {
  state = { userName: "" };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await fetch(
      `https://api.github.com/users/${this.state.userName}`
    );
    console.log(resp);
    const data = resp.json();
    data.then((resp) => {
      this.props.onSubmit(resp);
    });
    this.setState({ userName: "" });
  };
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github username"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
        />
        <button>Add Card</button>
      </form>
    );
  }
}
