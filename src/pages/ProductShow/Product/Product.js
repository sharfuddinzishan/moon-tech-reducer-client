import React from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { FaCartPlus, FaStudiovinari } from 'react-icons/fa';

const Product = ({ product }) => {
    const { model, image, rating, price, spec } = product || {}
    const { processor, motherboard, ram, graphics, storage } = spec[0] || {}
    return (
        <>
            <Card.Img className='w-50 mx-auto' variant="top" src={image} />
            <Card.Body>
                <Card.Title className='text-center mb-0'><small>{model}</small></Card.Title>
                <Card.Text className='text-center'>
                    <span className='fw-bold'>Rating {rating}&nbsp;&nbsp;&nbsp;</span>
                    <span className='fw-bold'>Price {price}</span>
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className='lh-sm'>{motherboard}</ListGroup.Item>
                <ListGroup.Item className='lh-sm'>{graphics}</ListGroup.Item>
                <ListGroup.Item className='lh-sm'>{processor}</ListGroup.Item>
                <ListGroup.Item className='lh-sm'>{ram}+ {storage}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Row>
                    <Col xs={12} md={10}>
                        <Button className='w-100 mb-1' variant='primary'><FaCartPlus /> &nbsp; Add To Cart</Button>
                    </Col>
                    <Col xs={12} md={2}>
                        <Button className='w-100' variant='primary'><FaStudiovinari /></Button>
                    </Col>
                </Row>
            </Card.Body>
        </>
    );
};

export default Product;