// Statefull Component
import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer";
// Component phải viết hoa chữ đầu tiên
class Baitap1 extends Component {
  //render ra html, những gì show ra html thì viết trong return
  //Phải có 1 thẻ vd Div bọc các thẻ ngang hàng với nhau, nếu ko sẽ bị lỗi
  render() {
    return (
      <div>
        <Header />
        <div className="contents">
          <Content />
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Baitap1;
