import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../image/img1.jpg"
import img2 from "../image/img2.jpg"
import img3 from "../image/img3.jpg"

import Button from 'react-bootstrap/Button'; 
const HeaderSlider = () => {
  return (
    <>
      <Carousel >
      <Carousel.Item variant="dark" style={{maxHeight:"650px"}}>
        <img
        style={{height:"90vh" ,objectFit:"cover"}}
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption className='shadow-lg  rounded-4 ' style={{backgroundColor:"rgb(255 255 255 / 80%)"}}>
          <h3 className='text-dark'>First slide label</h3>
          <p className='text-secondary'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button className='btn btn-dark'>Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item variant="dark" style={{maxHeight:"650px"}}>
        <img
        style={{height:"90vh" ,objectFit:"cover"}}
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption className='shadow-lg  rounded-4 ' style={{backgroundColor:"rgb(255 255 255 / 80%)"}}>
          <h3 className='text-dark'>First slide label</h3>
          <p className='text-secondary'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button className='btn btn-dark'>Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item variant="dark" style={{maxHeight:"650px"}}>
        <img
        style={{height:"90vh" ,objectFit:"cover"}}
          className="d-block w-100"
          src={img3}
          alt="First slide"
        />
        <Carousel.Caption className='shadow-lg  rounded-4 ' style={{backgroundColor:"rgb(255 255 255 / 60%)"}}>
          <h3 className='text-dark'>First slide label</h3>
          <p className='text-secondary'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button className='btn btn-dark'>Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
  )
}

export default HeaderSlider