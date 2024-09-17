import { Card, Row, Col, Button, Form } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";

const ProductCard = (props) => {
  // props is an object that contains the product data.
  // props.product is the product data.
  const cart = useContext(CartContext);
  const product = props.product;
  const productQuantity = cart.getProductQuantity(product.id);
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>ZMK{product.price}</Card.Text>

        {productQuantity > 0 ? (
          <>
          <Form as={Row}>
             <Form.Label column='true' sm='6'>In cart: {productQuantity}</Form.Label>
             <Col sm='6'>
              <Button sm='6' className="mx-2" onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
              <Button sm='6' className="mx-2" onClick={() => cart.addOneToCart(product.id)}>+</Button>
             </Col>
          </Form>
          <Button className="my-2" variant='danger' onClick={() => cart.deleteFromCart(product.id)}>Remove from Cart</Button>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add To cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
