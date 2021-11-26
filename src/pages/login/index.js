import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';

export default () => {
  return (
    <div className="p-login py-4">
      <Card style={{ maxWidth: 500 }} className="mx-auto">
        <Card.Body>
          <h2 className="text-center">
            <Link to="/" class="nav-link">
              LOGO
            </Link>
          </h2>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>

              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>

              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit" size="lg" block>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
