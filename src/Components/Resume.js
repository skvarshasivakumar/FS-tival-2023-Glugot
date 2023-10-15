import React, { Component } from "react";
import Slide from "react-awesome-reveal";
import ParticlesBg from "particles-bg";
class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
          {education.degree}
          </p>
          <p>{education.description}</p>
        </div>
      );
    });



    return (
      <section id="resume">
      <ParticlesBg color="#EA1179" type="cobweb" bg={{position: "absolute",zIndex: 999,height:1000}} />
        <Slide left duration={1300} triggerOnce={true}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Event Highlights</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
