import { Card, Row, Col, Button, Form } from "react-bootstrap";

const ProductCard = (props) => {
  // props is an object that contains the product data.
  // props.product is the product data.
  const product = props.product;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>ZMK{product.price}</Card.Text>
        <Button variant='primary'>Add To cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
