import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import { render } from "react-dom";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";

const items = [
  {
    src: "./DMC5.jpg"
  },
  {
    src: "/dmc01.jpg"
  },
  {
    src: "/dmc02.jpg"
  },
  {
    src: "/dmc03.jpg"
  },
  {
    src: "/dmc04.jpg"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            height="350px"
            width="100%"
            borderRadius="20px"
            src={item.src}
            alt={item.altText}
          />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <div className="conatainer">
        <Container>
          <div>
            <Row>
              <Col className="left-side" xs="9">
                <div className="slidebar-container">
                  <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                  >
                    <CarouselIndicators
                      items={items}
                      activeIndex={activeIndex}
                      onClickHandler={this.goToIndex}
                    />
                    {slides}
                    <CarouselControl
                      direction="prev"
                      directionText="Previous"
                      onClickHandler={this.previous}
                    />
                    <CarouselControl
                      direction="next"
                      directionText="Next"
                      onClickHandler={this.next}
                    />
                  </Carousel>
                </div>
                <div className="rectangle">
                  <Row>
                    <Col xs="auto">
                      <div className="textarea">STANDARD EDITION</div>
                    </Col>
                    <Col xs="auto">
                      <div className="pricearea">$69.99</div>
                    </Col>
                    <Col xs="auto">
                      <button className="myButtonBuyNow">Buy now</button>
                    </Col>
                    <Col xs="auto">
                      <button className="myButtonAddToCast">Add to cast</button>
                    </Col>
                  </Row>
                </div>
                <div className="rectangle">
                  <Row>
                    <Col xs="auto">
                      <div className="textarea">DELUXE EDITION</div>
                    </Col>
                    <Col xs="auto">
                      <div className="pricearea">$99.99</div>
                    </Col>
                    <Col xs="auto">
                      <button className="myButtonBuyNow">Buy now</button>
                    </Col>
                    <Col xs="auto">
                      <button className="myButtonAddToCast">Add to cast</button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col className="right-side" xs="auto">
                <div className="right-bar">
                  <div className="name-of-game">DEVIL MAY CRY V</div>
                  <div>
                    <h5>Release Date: 08/03/2019</h5>
                  </div>
                  <div>Type: Action, Hack and Slash, Demons, Violent, Gore</div>
                  <div className="type-of-game">
                    <h5 className="left-text">Achivement:</h5>
                    <div className="right-text">&#10004;</div>

                    <h5 className="left-text">Mod Enables:</h5>
                    <div className="right-text">&#10004;</div>

                    <h5 className="left-text">Multiplayer:</h5>
                    <div className="right-text">&#10004;</div>

                    <h5 className="left-text">Controller support:</h5>
                    <div className="right-text">&#10004;</div>

                    <h5 className="left-text">Multi-language:</h5>
                    <div className="right-text">&#10004;</div>

                    <h5 className="left-text">Steam:</h5>
                    <div className="right-text">&#10004;</div>

                    <h5 className="left-text">Cheat Enable:</h5>
                    <div className="right-text">&#10004;</div>

                    <h5 className="left-text">Chat-in:</h5>
                    <div className="right-text">&#10006;</div>

                    <h5 className="left-text">Voice-in:</h5>
                    <div className="right-text">&#10006;</div>

                    <h5 className="left-text">Club:</h5>
                    <div className="right-text">&#10006;</div>

                    <h5 className="left-text">Purchasing In-game:</h5>
                    <div className="right-text">&#10006;</div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="footer">bottom</div>
        </Container>
      </div>
    );
  }
}

export default App;
