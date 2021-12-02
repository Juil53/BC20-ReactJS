import React, { Component } from "react";
import Child from "./child";
import ChildFnc from "./childFnc";
import ChildrenComponent from "./children";

export default class Communication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Cybersoft",
      age: 4,
    };
  }

  handleState = () => {
    this.setState({
      username: "Nghia",
      age: 18,
    });
  };

  reset = (username, age) => {
    //hàm reset có nhiệm vụ là nhận lại data từ component child
    console.log(username, age);
    //Cập nhật lại state
    this.setState({
      username,
      age,
    });
  };

  render() {
    console.log("render");
    const { username, age } = this.state;
    return (
      <div>
        <h3>Communication</h3>
        <p>
          Username: {username} - Age: {age}
        </p>
        <button className="btn btn-success" onClick={this.handleState}>
          Change info
        </button>
        <hr />
        {/* props={} , tên props có thể đặt tùy ý, bên phải là giá trị truyền,giá trị này lấy từ state  */}
        <Child username={username} age={age} resetInfo={this.reset} />
        <hr />
        <ChildFnc username={username} age={age} />
        <hr />
        {/* Truyền tất cả thẻ html trong cặp Component Children */}
        <ChildrenComponent>
          <p>
            Username: {username} - Age: {age}
          </p>
          <div>Nghia</div>
          <h4>Hello World</h4>
        </ChildrenComponent>
      </div>
    );
  }
}
