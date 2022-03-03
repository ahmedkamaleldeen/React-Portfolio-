import React from "react";
import image from '../assets/images/1.jpg'
class Skills extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container bg-secondary p-5 text-white">
        <h1 className="text-center p-4">Skills</h1>
        <div className="col-12">
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="row">
          <div className="col-6">
            <h3 className="py-5" style={{borderBottom:"4px solid black"}}>My Focus</h3>
            <h3>UI/UX Design</h3>
            <h3>Responsive Design</h3>
            <h3>Web Design</h3>
            <h3>Mobile App Design</h3>
          </div>
          <div className="col-6">
            <img src={image} alt=" "/>
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
