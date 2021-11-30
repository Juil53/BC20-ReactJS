import React, { Component } from "react";

export default class ExampleHandlingEvents extends Component {
  constructor(props) {
    super(props);
    //binding
    // this.handleLogin = this.handleLogin.bind(this);
  }
  username = "Cybersoft";
  isLogin = false;
  handleLogin = () => {
    console.log(this.isLogin);  
    this.isLogin = true;
    console.log(this.isLogin);
  };

  //   renderHTML() {
  //     if (this.isLogin) {
  //       return (
  //         <div>
  //           <h1>Hello {this.username}</h1>
  //           <button className="btn btn-danger">Logout</button>
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div>
  //           <h1>Vui long Login</h1>
  //           <button className="btn btn-success">Login</button>
  //         </div>
  //       );
  //     }
  //   }

  renderHTML() {
    //toán tử 3 ngôi
    // dk ? "true" : "false"
    return this.isLogin ? (
      <div>
        <h1>Hello {this.username}</h1>
        <button className="btn btn-danger">Logout</button>
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
    return (
      <div>
        <h3>ExampleHandlingEvents</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
