import React from "react";

export default function ChildrenComponent(props) {
  return (
    <div>
      <h3>Children</h3>
      {/* {props.children} cú pháp mặc định, phải ghi đúng, lấy hết thẻ html từ index.js */}
      {props.children}
    </div>
  );
}
