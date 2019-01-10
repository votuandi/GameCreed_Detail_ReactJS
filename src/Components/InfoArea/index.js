import React, { Component } from "react";
import "./styles.css";
import { Badge, Container, Row, Col } from "reactstrap";

class InfoArea extends Component {
  render() {
    return (
      <Row>
        <Col sm={{ size: 2, offset: 6 }}>
          <div id="info-group">
            <div className="left-group">
              <div className="about-us"><h4>About Us</h4></div>
              <p>Legal</p>
              <p>Term of Sale</p>
              <p>User Agreement</p>
              <p>Privacy and Cookie Privacy</p>
            </div>
          </div>
        </Col>
        <Col sm={{ size: "auto", offset: 1 }}>
          <div id="info-group">
            <div className="right-group">
              <p>@2018 Game Creed inc.</p>
              <p>All Right Reserve</p>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
export default InfoArea;
