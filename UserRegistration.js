import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const UserRegistration = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form>
            <h2>User Registration</h2>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" 
/>
            </Form.Group>
            <Button variant="primary" type="submit">Register</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserRegistration;