import React from 'react';
import { Container, Card, Button, Alert } from 'react-bootstrap';

const Cancel = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="shadow-lg p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <Card.Body className="text-center">
          <Alert variant="danger">
            <h4 className="alert-heading">Payment Canceled</h4>
            <p>Your payment was canceled. Please try again or return to the store to continue shopping.</p>
          </Alert>

          <Card.Text>
            If you encountered an issue, feel free to contact us for support or try checking out again.
          </Card.Text>

          <Button href="/" variant="primary" className="mt-3">Return to Store</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Cancel;
