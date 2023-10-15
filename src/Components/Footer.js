import React, { Component } from "react";
import Fade from "react-awesome-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>

        <div className="row">
          <Fade bottom triggerOnce={true}>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; Copyrights 2022. All Right Reserved.</li>
                <li>
                    Team of Glugot, TCE CSE Department
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
