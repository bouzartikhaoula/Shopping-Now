import React from 'react'
import { Button, Container } from 'react-bootstrap'
import {restord ,add } from "../slice/ProductSlice";


import { useDispatch, useSelector } from 'react-redux';
const ItemsDetailles = ({id,name,imgUrl,price}) => {
    const Quantity = useSelector((state) => state.cart.Quantity);
    const dispatch=useDispatch()

  return (
<div className="shadow-lg p-4 mb-4 bg-white  m-auto mt-4 rounded-4  m-auto w-75 h-75" >
<div className=' row  m-auto mt-5 '>
<div className="col-lg-4 d-flex align-items-center ">
    <img className='rounded-3' src={imgUrl}  style={{width:"100%",height:"100%"}} alt="" /> </div>
<div className="col-lg-8 d-flex align-items-center">
    <div>
        <h3>{name}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam temporibus quasi repellendus atque molestias suscipit deserunt dolore quaerat, obcaecati cupiditate fugit voluptatibus consectetur, iste nostrum perspiciatis commodi necessitatibus iure.</p>
        <p>{price} * {Quantity}</p>
    </div>
    
</div>
</div>
    <div className="d-flex justify-content-center m-5">
        <Button onClick={()=>dispatch(restord())}>-</Button> <h4 className='ms-3 me-3'> {Quantity} </h4> <Button onClick={()=>dispatch(add())}>+</Button> <Button className='ms-3 me-3'>buy now</Button>
    </div>

    </div>
  )
}

export default ItemsDetailles