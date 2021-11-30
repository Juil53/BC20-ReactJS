import React, { Component } from "react";
import ExampleHandlingEvents from "./example";

export default class HandlingEvents extends Component {
  handlingEvents() {
    console.log(123);
  }

  handlingEventsParam(username,age) {
      console.log(username,age);
  }

  render() {
    return (
      <div>
        <h3>HandlingEvents</h3>
        <button className="btn btn-success" onClick={this.handlingEvents}>
          HandlingEvents
        </button>

        <button
          className="btn btn-info"
          onClick={() => {
            console.log(456);
          }}
        >
          HandlingEvents
        </button>

        <button
          className="btn btn-danger"
          onClick={()=>{
            this.handlingEventsParam("Cybersoft",18)
          }}
        >
          HandlingEvent Param
        </button>

        <ExampleHandlingEvents/>
      </div>
    );
  }
}
