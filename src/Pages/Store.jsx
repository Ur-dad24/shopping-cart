import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { products } from '../productsStore'
import ProductCard from '../Components/ProductCard'

const Store = () => {
  return (
    <>
    <h1>Welcome to the store</h1>
    <Row xs={1} md={3} className="g-4">
      {
        products.map(product => (
          <Col key={product.id} align='center'>
            <ProductCard
            product={product}
          />
          </Col>
        ))
      }
    </Row>

      
    </>
  )
}

export default Store