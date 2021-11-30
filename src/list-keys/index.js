import React, { Component } from "react";

export default class ListKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [
        { username: "Nghia", age: 18 },
        { username: "Hoang", age: 20 },
        { username: "Thuy", age: 22 },
      ],
    };
  }

  renderListUser = () => {
    return this.state.listUser.map((user, index) => {
      return (
        <li key={index}>
          username: {user.username} - age: {user.age}
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>ListKeys</h3>
        <ul>
          {this.renderListUser()}
          {/* {this.state.listUser.map((user, index) => {
            return (
                //key nhận vào giá trị unique, mỗi key khác nhau
              <li key={index}>
                username: {user.username} - age: {user.age}
              </li>
            );
          })} */}
        </ul>
      </div>
    );
  }
}
