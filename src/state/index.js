import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Vì nằm trong object nên sửa lại dấu = và dáu ;
      username: "Cybersoft",
      isLogin: false,
    };
  }

  handleLogin = () => {
    //Cập nhật lại thuộc tính State bằng setState
    //Hàm setState bị bất đồng bộ
    this.setState(
      {
        isLogin: true,
      },
      () => {
        console.log(this.state.isLogin);
      }
    );
  };
  handleLogout = () => {
    //Cập nhật lại thuộc tính State bằng setState
    this.setState({
      isLogin: false,
    });
  };

  renderHTML() {
    //toán tử 3 ngôi
    // dk ? "true" : "false"
    return this.state.isLogin ? (
      <div>
        <h1>Hello {this.state.username}</h1>
        <button className="btn btn-danger" onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    ) : (
      <div>
        <h1>Vui long Login</h1>
        <button className="btn btn-success" onClick={this.handleLogin}>
          Login
        </button>
      </div>
    );
  }

  render() {
    console.log("render");
    return (
      <div>
        <h3>State</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
