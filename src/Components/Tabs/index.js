import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './styles.css'

import {ListGroup, ListGroupItem} from 'reactstrap';
import { Table } from 'reactstrap';
import Stars from '../Stars';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
            <NavItem>
                <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                >
                {
                    (this.state.activeTab == 1)
                    ?<button className="orange-button"> Decription </button>
                    : <button className="orange-button button-opacity"> Decription </button>
                }
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                >
                {
                    (this.state.activeTab == 2)
                    ?<button className="orange-button">Requirement</button>
                    : <button className="orange-button button-opacity">Requirement</button>
                }
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}
                >
                {
                    (this.state.activeTab == 3)
                    ?<button className="orange-button">Rating</button>
                    : <button className="orange-button button-opacity">Rating</button>
                }
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4'); }}
                >
                {
                    (this.state.activeTab == 4)
                    ?<button className="orange-button">Reaction</button>
                    : <button className="orange-button button-opacity">Reaction</button>
                }
                </NavLink>
            </NavItem>
        </Nav>
        
        <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                        {/* <h4>Tab 1 Contents</h4> */}
                        <div className = "tabItem">
                            <div className = "videoContent">
                                <iframe
                                    height="480"
                                    width="640"
                                    src="https://www.youtube.com/embed/KMSGj9Y2T9Q" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                            <div className="text-decription">
                                The gameplay will feature the return of Dante and Nero as playable characters, along with a new character, named "V". The gameplay is similar to the other titles in the Devil May Cry series, focusing on fast-paced "stylish action". The player fights off hordes of demons with a variety of attacks and weapons and receives a style-rating in combat based on a number of factors, such as move variety, the length of a combo and dodging attacks. The music in the game will change based on the players performance in combat.
                            </div>
                        </div>
                    </Col>
                </Row>
            </TabPane>

            <TabPane tabId="2">
                <Row>
                    <Col sm="6">
                        <div className = "tabItem2">
                            <ListGroup>
                                <ListGroupItem>Official Minimum Requirements</ListGroupItem>
                                <ListGroupItem>OS: WINDOWS® 7 (64-BIT Required)</ListGroupItem>
                                <ListGroupItem>Processor: Intel® Core™ i7-4770 3.4GHz or better</ListGroupItem>
                                <ListGroupItem>Memory: 8 GB RAM</ListGroupItem>
                                <ListGroupItem>Graphics: NVIDIA® GeForce® GTX760 or better</ListGroupItem>
                                <ListGroupItem>DirectX: Version 11</ListGroupItem>
                                <ListGroupItem>Storage: 35 GB available space</ListGroupItem>
                                <ListGroupItem>Additional Notes: *Controllers recommended *Internet connection required for game activation.</ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col sm="6">
                        <div className = "tabItem2">
                            <ListGroup>
                                <ListGroupItem>Official Recommended Requirements</ListGroupItem>
                                <ListGroupItem>OS: WINDOWS® 7 (64-BIT Required)</ListGroupItem>
                                <ListGroupItem>Processor: Intel® Core™ i7-4770 3.4GHz or better</ListGroupItem>
                                <ListGroupItem>Memory: 8 GB RAM</ListGroupItem>
                                <ListGroupItem>Graphics: NVIDIA® GeForce® GTX960 or better</ListGroupItem>
                                <ListGroupItem>DirectX: Version 11</ListGroupItem>
                                <ListGroupItem>Storage: 35 GB available space</ListGroupItem>
                                <ListGroupItem>Additional Notes: *Controllers recommended *Internet connection required for game activation.</ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </TabPane>

            <TabPane tabId="3">
                <Row>
                    <Col sm="12">
                        <div className = "tabItem">
                        <Table classNmae="table-container" borderless>
                            <tr>
                                <th>Game Informer</th>
                                <th><Stars></Stars></th>
                            </tr>
                            <tr>
                                <th>N4G</th>
                                <th><Stars></Stars></th>
                            </tr>
                            <tr>
                                <th>Gamespot</th>
                                <th><Stars></Stars></th>
                            </tr>
                            <tr>
                                <th>Eurogamer</th>
                                <th><Stars></Stars></th>
                            </tr>
                            <tr>
                                <th>Polygon</th>
                                <th><Stars></Stars></th>
                            </tr>
                            <tr>
                                <th>GameZone</th>
                                <th><Stars></Stars></th>
                            </tr>
                            <tr>
                                <th>Metacritic</th>
                                <th><Stars></Stars></th>
                            </tr>
                            <tr>
                                <th>Kotaku</th>
                                <th><Stars></Stars></th>
                            </tr>
                            <tr>
                                <th>IGN</th>
                                <th><Stars></Stars></th>
                            </tr>       
                        </Table>
                        </div>
                    </Col>
                </Row>
            </TabPane>

            <TabPane tabId="4">
                <Row>
                    <Col sm="12">
                        <div className = "tabItem">
                            <div className = "videoContent">
                                <iframe
                                    width="640px" 
                                    height="480px" 
                                    src="https://www.youtube.com/embed/jWRKHGho2Jo?list=LL1Cxj1WLVxpGJ3Jc_8Lv3SQ" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </Col>
                </Row>
            </TabPane>
        </TabContent>
      </div>
    );
  }
}
export default Tabs