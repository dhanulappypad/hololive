import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, CardBody } from 'reactstrap';
import classnames from 'classnames';


const Career = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
    <main>
      <div className="container careerTab">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  IT Department
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Quality Testing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Marketing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "4" })}
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  Seles & B2B
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "5" })}
                  onClick={() => {
                    toggle("5");
                  }}
                >
                  Logistic
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="4">
                    <Card>
                      <CardBody>
                        <CardTitle className="text-center">Web Developer (php Code-ignitor)</CardTitle>
                        <CardText className="text-center"><i classNam="fa fa-map-marker"></i> Location: <span>Vadodara</span></CardText>
                      </CardBody>
                      <Button color="dark">Apply</Button>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card>
                      <CardBody>
                        <CardTitle className="text-center">Graphic Designer (Intern)</CardTitle>
                        <CardText className="text-center"><i classNam="fa fa-map-marker"></i> Location: <span>Vadodara</span></CardText>
                      </CardBody>
                      <Button color="dark">Apply</Button>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card>
                      <CardBody>
                        <CardTitle className="text-center">Graphic Designer</CardTitle>
                        <CardText className="text-center"><i classNam="fa fa-map-marker"></i> Location: <span>Vadodara</span></CardText>
                      </CardBody>
                      <Button color="dark">Apply</Button>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card>
                      <CardBody>
                        <CardTitle className="text-center">SEO Intern</CardTitle>
                        <CardText className="text-center"><i classNam="fa fa-map-marker"></i> Location: <span>Vadodara</span></CardText>
                      </CardBody>
                      <Button color="dark">Apply</Button>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card>
                      <CardBody>
                        <CardTitle className="text-center">SEO Analyst</CardTitle>
                        <CardText className="text-center"><i classNam="fa fa-map-marker"></i> Location: <span>Vadodara</span></CardText>
                      </CardBody>
                      <Button color="dark">Apply</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tabId="2">

              </TabPane>

              <TabPane tabId="3">
                <Row>
                  <Col sm="4">
                    <Card>
                      <CardBody>
                        <CardTitle className="text-center">SEO Executive - Full Time</CardTitle>
                        <CardText className="text-center"><i classNam="fa fa-map-marker"></i> Location: <span>Vadodara</span></CardText>
                      </CardBody>
                      <Button color="dark">Apply</Button>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card>
                      <CardBody>
                        <CardTitle className="text-center">Marketing(intern)</CardTitle>
                        <CardText className="text-center"><i classNam="fa fa-map-marker"></i> Location: <span>Vadodara</span></CardText>
                      </CardBody>
                      <Button color="dark">Apply</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tabId="4">
                <Row>
                  <Col sm="4">
                    <Card>
                      <CardBody>
                        <CardTitle className="text-center">Sales & B2B (Intern)</CardTitle>
                        <CardText className="text-center"><i classNam="fa fa-map-marker"></i> Location: <span>Vadodara</span></CardText>
                      </CardBody>
                      <Button color="dark">Apply</Button>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card>
                      <CardBody>
                        <CardTitle className="text-center">Sales & B2B</CardTitle>
                        <CardText className="text-center"><i classNam="fa fa-map-marker"></i> Location: <span>Vadodara</span></CardText>
                      </CardBody>
                      <Button color="dark">Apply</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tabId="5">

              </TabPane>

            </TabContent>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Career;
