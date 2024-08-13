import React from 'react'
import ProductContent from '../ItemProduct/ProductContent'
import List from "../ItemProduct/List.json"
import { Row } from 'react-bootstrap'

const Bedroom = () => {
  return (
    <>
   <Row className="h-100 m-5 pb-3">
        {List.filter(item => item.catigory === "Bedroom").map(item => (
          <ProductContent key={item.id} {...item} />
        ))}
      </Row>
    </>
  )
}

export default Bedroom



