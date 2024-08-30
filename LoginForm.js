import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import api from './App'; // Ensure 'api' is correctly configured in './App'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/login', { username, password });
      console.log('User logged in successfully!');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
