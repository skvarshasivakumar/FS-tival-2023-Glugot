import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-awesome-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const video = this.props.data.video;
    const github = this.props.data.github;
const coloring={
  fontFamily:"Raleway",
  color:"black"
};
    return (
      <header id="home">
        <ParticlesBg type="cobweb" bg={true}/>
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom triggerOnce={true}>
              <h1 className="responsive-headline">FS'tival 2023</h1>
            </Fade>
            <Fade bottom duration={1200} triggerOnce={true}>
              <h3 style={coloring}>
              Welcome to FS'tival 2023 - Embrace the World of Open Source!

              Join us for a celebration of technology, innovation, and collaboration. FS'tival is an annual free software festival that brings together students, professionals, and enthusiasts to explore the world of open source technology.
              <br></br><br></br>
              </h3>
              <p className="eventfont">Event Date: September 23, 2023<br></br>Location: Department of CSE, TCE</p>
            </Fade>
            <hr />
            <Fade bottom duration={2000} triggerOnce={true}>
              <ul className="social">
                <a href={video} className="button btn project-btn">
                  <i className="fa fa-play"></i>2022 Glimpse
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-globe"></i>TCE Website
                </a>
              </ul>
            </Fade>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}
export default Header;
