import { Button, Modal, Navbar } from "react-bootstrap"
import { useState, useContext } from "react"
import { CartContext } from "../CartContext"


const NavbarComponent = () => {
  const cart = useContext(CartContext)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
  return (
<>
    <Navbar expand='sm'>
      <Navbar.Toggle />
      <Navbar.Brand href="/">Logo</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Button onClick={handleShow}>
          Cart: {productsCount} items
        </Button>
      </Navbar.Collapse>
    </Navbar>

<Modal show={show} onHide={handleClose} >
  <Modal.Header closeButton>
    <Modal.Title>Shopping Cart</Modal.Title>
  </Modal.Header>
    <Modal.Body>
      {
        productsCount > 0?
        <>
            <p>Items in your cart:</p>
            {cart.items.map((currentProduct, index) => (
              <h1>{currentProduct.id}</h1>   
            ) )}
            <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
            <Button variant='success'>CHECKOUT</Button>
        </>
        :
        <h1>There are no products in your cart!</h1>
      }
    </Modal.Body>
 
</Modal>

</>
  )
}

export default NavbarComponent