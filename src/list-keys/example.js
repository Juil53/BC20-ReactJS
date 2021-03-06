import React, { Component } from "react";
import data from "./data.json";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovie: data,
    };
  }

  renderListMovie = () => {
    const { listMovie } = this.state;
    return listMovie.map((movie) => {
      return (
        <div className="col-md-4" key={movie.maPhim}>
          <div className="card">
            <img className="card-img-top" src={movie.hinhAnh} alt />
            <div className="card-body">
              <h4 className="card-title">{movie.tenPhim}</h4>
              <p className="card-text">{movie.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Example</h3>
        <div className="row">
        {this.renderListMovie()}
        </div>
      </div>
    );
  }
}
