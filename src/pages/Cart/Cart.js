import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { useProducts } from '../../state/ProductsStates/contexts/ProductProvider/ProductProvider';
import Product from '../ProductShow/Product/Product';
import Loading from '../Shared/LoaderSpinner/Loading';

const Cart = () => {
    const { state: { cart, loading, error } } = useProducts()
    let content
    if (loading) return <Loading></Loading>
    if (error) return <p> Please Reload Again!</p>
    if (!loading && !error && cart.length === 0) return <p> No Product Found To Display</p>
    if (!loading && !error && cart.length) {
        content = cart?.map(
            product =>
                <Col key={product._id} xs={12} sm={6} md={6} lg={4} className='mb-4'>
                    <Card className='h-100'>
                        <Product product={product}></Product>
                    </Card>
                </Col>
        )
    }
    return (
        <div>
            <Container>
                <Row>
                    {
                        content
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Cart;