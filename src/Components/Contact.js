import React, { Component } from "react";
import Slide from "react-awesome-reveal";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResponsiveImage from "./ResposiveImage";
import ResponsiveImage2 from "./ResponsiveImage2";
class Contact extends Component {
  render() {
    if (!this.props.data) return null;
    return (
      <center>

 <Container id="contact">
 <h1>Big thanks to our dedicated volunteers, organizers, mentors, and coordinators for making it all happen!</h1>
         <Row>
         <Slide left duration={1300} triggerOnce={true}>
        <Col><ResponsiveImage/></Col>
        </Slide>
        <br/>
        <Slide right duration={1300} triggerOnce={true}>

        <Col><ResponsiveImage2/></Col>
        </Slide>
      </Row>      
    </Container>
      </center>
    );
  }
}

export default Contact;
