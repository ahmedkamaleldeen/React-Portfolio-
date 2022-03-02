import React from "react";
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
            {this.state.projects.map((project, index) => {
              return (
                <div className="col-4 d-flex ">
                  <div
                    key={index}
                    className=" p-5 m-2"
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
            ;
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
