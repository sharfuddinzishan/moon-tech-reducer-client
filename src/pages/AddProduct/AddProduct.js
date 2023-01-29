import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const AddProduct = () => {
    return (
        <div>
            <Container>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="model">
                            <Form.Label>Model</Form.Label>
                            <Form.Control type="text" name="model" placeholder="Model" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="price" placeholder="Price" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="rating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control type="number" name="rating" placeholder="Rating" />
                        </Form.Group>
                        <Row>
                            <Form.Group as={Col} controlId="image">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" name="image" placeholder="URL of Image" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="status">
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="text" name="status" placeholder="Status" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="processor">
                                <Form.Label>Processor</Form.Label>
                                <Form.Control type="text" name="processor" placeholder="Processor" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="motherboard">
                                <Form.Label>Motherboard</Form.Label>
                                <Form.Control type="text" name="motherboard" placeholder="otherboard" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="ram">
                                <Form.Label>Ram</Form.Label>
                                <Form.Control type="text" name="ram" placeholder="Ram" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="graphics">
                                <Form.Label>Graphics</Form.Label>
                                <Form.Control type="text" name="graphics" placeholder="Graphics" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="storage">
                                <Form.Label>Storage</Form.Label>
                                <Form.Control type="text" name="storage" placeholder="Storage" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="psu">
                                <Form.Label>PSU</Form.Label>
                                <Form.Control type="text" name="psu" placeholder="Power Supply Unit" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="casing">
                                <Form.Label>Casing</Form.Label>
                                <Form.Control type="text" name="casing" placeholder="Casing" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="cooler">
                                <Form.Label>Cooler</Form.Label>
                                <Form.Control type="text" name="cooler" placeholder="Cooler" />
                            </Form.Group>
                        </Row>
                    </Row>
                    <Button className='d-block ms-auto' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddProduct;