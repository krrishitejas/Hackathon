import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import api from './App'; // Ensure 'api' is correctly configured in './App'

const IdentityDocumentUpload = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (file) {
        formData.append('file', file);
        await api.post('/upload-document', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log('Identity document uploaded successfully!');
      } else {
        console.error('No file selected.');
      }
    } catch (error) {
      console.error('Error uploading document:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <h2>Upload Identity Document</h2>
            <Form.Group controlId="file">
              <Form.Label>File</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Group>
            <Button variant="primary" type="submit">Upload</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default IdentityDocumentUpload;
