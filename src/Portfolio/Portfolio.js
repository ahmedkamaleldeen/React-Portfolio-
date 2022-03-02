import React from "react";
import ShowCards from "../Cards/Cards";
class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [
        "Web Design",
        "Mobile Design",
        "Responsive Design",
        "Angular",
        "React",
        "NextJS",
      ],
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <h1 className="p-5">Portfolio</h1>

        <div className="container">
          <div className="row">
            {/* {this.state.projects.map((project, index) => {
              return (
                <div className="col-4  ">
                  <div
                    key={index}
                    className= "m-2 d-flex justify-content-center align-items-center"
                    style={{
                      height: "200px",
                      width:"400px",
                      border: "4px solid black",
                      backgroundColor: "aqua",
                    }}
                  >
                    <h1>{project}</h1>
                  </div>
                </div>
              );
            })}
            ; */}
            <ShowCards Projects={this.state.projects}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
