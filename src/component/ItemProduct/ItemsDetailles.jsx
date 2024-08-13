import React from 'react'
import { Button, Container } from 'react-bootstrap'
const ItemsDetailles = ({id,name,imgUrl,price}) => {
  return (
<div className="shadow-lg p-4 mb-4 bg-white  m-auto mt-4 rounded-4  m-auto" style={{width:"80%",height:"75vh" }}>
<div className=' row  m-auto mt-5 '>
<div className="col-4 d-flex align-items-center ">
    <img className='rounded-3' src={imgUrl}  style={{width:"100%",height:"100%"}} alt="" /> </div>
<div className="col-8 d-flex align-items-center">
    <div>
        <h3>{name}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam temporibus quasi repellendus atque molestias suscipit deserunt dolore quaerat, obcaecati cupiditate fugit voluptatibus consectetur, iste nostrum perspiciatis commodi necessitatibus iure.</p>
        <p>{price} * contitai</p>
    </div>
    
</div>
</div>
    <div className="d-flex justify-content-center m-5">
        <Button>-</Button> <h4 className='ms-3 me-3'>2</h4> <Button>+</Button> <Button className='ms-3 me-3'>buy now</Button>
    </div>

    </div>
  )
}

export default ItemsDetailles