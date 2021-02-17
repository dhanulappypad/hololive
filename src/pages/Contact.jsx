import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Contact = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <Form>
              <FormGroup>
                <Input type="text" name="Name" placeholder="Name" required/>
              </FormGroup>
              <FormGroup>
                <Input type="email" name="email" placeholder="Email" required/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="phone" placeholder="Phone" required/>
              </FormGroup>
              <FormGroup>
                <Input type="textarea" name="Message" rows="5" placeholder="Message" />
              </FormGroup>
              <Button color="danger">Submit</Button>
            </Form>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <h5>Contact Details</h5>
            <div className="mb-2">
              <Button color="danger" className="mr-2"><i className="fa fa-phone"></i></Button>
              <a href="tel:9898989898">+91 12365 47896</a>
            </div>
            <div>
              <Button color="danger" className="mr-2"><i className="fa fa-envelope"></i></Button>
              <a href="mailto:contact@holo.in.net">contact@holo.in.net</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
