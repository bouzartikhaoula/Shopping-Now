import React from "react";
import { Container,Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useDispatch } from "react-redux";
import { saveTodo } from "../slice/ProductSlice";
import { useNavigate } from "react-router-dom";

const ProductContent = ({id,name,imgUrl,price}) => {
  const dispatch=useDispatch()
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(saveTodo({ id, name, imgUrl, price }));
    navigate(`/detailles`);

  
  };
  return (
  
  
        <Col md={4} lg={3} sm={6} >
          <Card className="text-center mb-3" >
            <Card.Img variant="top"  src={imgUrl}  style={{ height:"185px"}}/>
            <Card.Body>
              <Card.Title> {name} </Card.Title>
              <Card.Title className="text-secondary"> {price} </Card.Title>
              <Button onClick={handelSubmit} >Add To the Card</Button>
            </Card.Body>
          </Card>
        </Col>

    
  
)};

export default ProductContent;
