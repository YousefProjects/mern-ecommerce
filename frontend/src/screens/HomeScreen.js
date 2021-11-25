import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from '../components/Product'
import products from "../products";

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Product product={product}/>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
