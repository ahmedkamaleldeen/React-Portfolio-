import React from "react";
class AboutUs extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-6 d-flex justify-centent-center align-items-center">
            <h1>AboutUs</h1>
          </div>
          <div className="col-6">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button className="btn btn-secondary">Download Resume</button>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;