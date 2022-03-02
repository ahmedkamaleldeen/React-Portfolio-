import { Button } from "bootstrap";
import React from "react";

class Hero extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center bg-dark text-white" style={{height:"30vh"}}>
            <h1>Ahmed Kamal</h1>
            <h1>MEARN STACK DEVELOPER</h1>
            <button className="btn btn-warning">Contact Me</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;
