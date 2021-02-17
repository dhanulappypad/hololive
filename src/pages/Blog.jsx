import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const Blog = () => {
  return (
    <main>
      <div className="container blogs">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <Card className="mb-4">
                    <CardImg top width="100%" src="/assets/img/blog1.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h5">Blog 1</CardTitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                      <CardText>
                        <small className="text-muted">15/02/2121</small>
                      </CardText>
                    </CardBody>
                  </Card>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <Card className="mb-4">
                    <CardImg top width="100%" src="/assets/img/blog2.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h5">Blog 2</CardTitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                      <CardText>
                        <small className="text-muted">15/02/2121</small>
                      </CardText>
                    </CardBody>
                  </Card>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <Card className="mb-4">
                    <CardImg top width="100%" src="/assets/img/blog1.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h5">Blog 3</CardTitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                      <CardText>
                        <small className="text-muted">15/02/2121</small>
                      </CardText>
                    </CardBody>
                  </Card>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <Card className="mb-4">
                    <CardImg top width="100%" src="/assets/img/blog2.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h5">Blog 4</CardTitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                      <CardText>
                        <small className="text-muted">15/02/2121</small>
                      </CardText>
                    </CardBody>
                  </Card>
                </div>

              </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
              <h5>Recent Post</h5>
              <ListGroup>
                <ListGroupItem>
                  <ListGroupItemHeading>Blog 1</ListGroupItemHeading>
                  <ListGroupItemText>
                    Donec id elit non mi porta gravida at eget metus
                  </ListGroupItemText>
                  <small className="text-muted">15/02/2121</small>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>Blog 1</ListGroupItemHeading>
                  <ListGroupItemText>
                    Donec id elit non mi porta gravida at eget metus
                  </ListGroupItemText>
                  <small className="text-muted">15/02/2121</small>
                </ListGroupItem>
              </ListGroup>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blog;
