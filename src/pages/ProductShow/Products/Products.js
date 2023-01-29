import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { useProducts } from '../../../state/ProductsStates/contexts/ProductProvider/ProductProvider';
import Loading from '../../Shared/LoaderSpinner/Loading';
import Product from '../Product/Product';

const Products = () => {
    const { state: { products, loading, error } } = useProducts()
    let content
    if (loading) return <Loading></Loading>
    if (error) return <p> Please Reload Again!</p>
    if (!loading && !error && products.length === 0) return <> {toast.error('No Product Found To Display')} </>
    if (!loading && !error && products.length) {
        content = products?.map(
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

export default Products;