import { Button, Modal, Navbar } from "react-bootstrap"
import { useState } from "react"


const NavbarComponent = () => {
  const [show, setShow] = useState(false)
  
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
<>
    <Navbar expand='sm'>
      <Navbar.Toggle />
      <Navbar.Brand href="/">Logo</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Button onClick={handleShow

        }>cart 0 items</Button>
      </Navbar.Collapse>

    </Navbar>

<Modal show={show} onHide={handleClose} >
  <Modal.Header closeButton>
    <Modal.Title>Shopping Cart</Modal.Title>
  </Modal.Header>
    <Modal.Body>
      <h1>This is the modal body</h1>
    </Modal.Body>
 
</Modal>

</>
  )
}

export default NavbarComponent