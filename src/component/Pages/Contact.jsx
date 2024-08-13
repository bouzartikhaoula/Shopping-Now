import React from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <>
  <div className='shadow-lg p-4  w-50 bg-white mb-5 mt-5 m-auto rounded-4  '>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="textarea" placeholder="Your Name" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Button>Send</Button>
  </div>

    </>
  )
}

export default Contact