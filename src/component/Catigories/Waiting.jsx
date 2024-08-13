import React from 'react'
import ProductContent from '../ItemProduct/ProductContent'
import List from "../ItemProduct/List.json"
import { Row } from 'react-bootstrap'
const Waiting = () => {
  return (
    <>
<Row className="h-100 m-5 pb-3">
        {List.filter(item => item.catigory === "Waiting").map(item => (
          <ProductContent key={item.id} {...item} />
        ))}
      </Row>
    </>
  )
}

export default Waiting