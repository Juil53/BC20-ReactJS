import React, { Component } from "react";

export default class Child extends Component {
  handleResetInfo = () => {
    const username = "Cybersoft";
    const age = 4;
    this.props.resetInfo(username, age);
  };

  render() {
    // const propsUsername = this.props.username;
    // console.log(propsUsername);
    console.log(this.props);
    //Giá trị username,age lấy từ props, props sẽ có ở component con
    const { username, age } = this.props;
    console.log(username);
    return (
      <div>
        <h3>Child Component</h3>
        <p>
          Username: {username} - Age: {age}
        </p>
        <button className="btn btn-danger" onClick={this.handleResetInfo}>
          Reset Info
        </button>
      </div>
    );
  }
}
