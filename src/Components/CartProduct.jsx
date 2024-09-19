import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { getProductData } from '../productsStore'


const CartProduct = (props) => {
    const cart = useContext(CartContext)
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id)
  return (
    <>
    <h3>{productData.name}</h3>
    <p>{quantity} total</p>
    <p>ZMK{(quantity * productData.price).toFixed(2)}</p>
    <Button size='sm' onClick={() => cart.deleteFromCart(id)}>Remove</Button>
    <hr />
    </>
  )
}


export default CartProduct