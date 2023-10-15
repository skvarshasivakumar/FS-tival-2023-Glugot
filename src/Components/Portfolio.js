import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-awesome-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage ="images/image/" + projects.image;
      return (
        <center>
<div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
        </center>
        
      );
    });
    const projects2 = this.props.data.projects2.map(function (projects) {
      let projectImage ="images/image/" + projects.image;
      return (
        <center>
<div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
        </center>
        
      );
    });

    return (
        <center>
<section id="portfolio">
        <Fade left duration={1000} distance="40px" triggerOnce={true}>
          <div className="row">
            <div className="twelve columns collapsed">
                         <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <section id="portfolio">
        <Fade left duration={1000} distance="40px" triggerOnce={true}>
          <div className="row">
            <div className="twelve columns collapsed">
                        <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects2}
              </div>
            </div>
          </div>
        </Fade>
      </section>
        </center>
      
    );
  }
}

export default Portfolio;
