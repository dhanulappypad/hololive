import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import blogData from '../json/Blogdata';
import Card from '../componant/Card';

const Blog = () => {
  return (
    <main>
      <div className="container blogs pt-3">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-12">
              <div className="row">
                {
                  blogData.map((val, ind) => {
                    return <Card key={ind}
                      imgsrc = {val.imgsrc}
                      title = {val.title}
                    />
                  })
                }
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
