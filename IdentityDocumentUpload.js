import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const IdentityDocumentUpload = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form>
            <h2>Upload Identity Document</h2>
            <Form.Group controlId="file">
              <Form.Label>File</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" type="submit">Upload</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default IdentityDocumentUpload;