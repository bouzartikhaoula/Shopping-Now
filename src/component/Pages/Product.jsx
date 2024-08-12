import React from 'react'
import ProductContent from '../ItemProduct/ProductContent'
import List from "../ItemProduct/List.json"
import { Row } from 'react-bootstrap'
const Product = () => {
  return (
    <Row className="  h-100 m-4">
    {List.map((item)=>
    <   ProductContent key={item.id} {...item} />
)}
    </Row>
  )
}

export default Product