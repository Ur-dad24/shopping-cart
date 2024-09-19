import React from 'react';
import { Container, Card, Button, Alert } from 'react-bootstrap';

const Success = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="shadow-lg p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <Card.Body className="text-center">
          <Alert variant="success">
            <h4 className="alert-heading">Payment Successful!</h4>
            <p>Your payment was successful. Thank you for your purchase!</p>
          </Alert>

          <Card.Text>
            We’ve received your order, and we’re working on it. You will receive a confirmation email soon.
          </Card.Text>

          <Button href="/" variant="primary" className="mt-3">Return to Store</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Success;
