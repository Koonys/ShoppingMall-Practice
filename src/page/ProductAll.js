import React, {useEffect, useState} from 'react';
import ProductCard from "../component/ProductCard";
import {Col, Container, Row} from "react-bootstrap";

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const getProducts= async ()=>{
        let url = `https://my-json-server.typicode.com/Koonys/ShoppingMall-Practice/products`
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }
    useEffect(() => {
        getProducts()
    }, []);
    return (
        <div>
            <Container>
                <Row>
                    {productList.map((menu)=>(
                        <Col lg={3} className={"card"} key={menu.id}>
                            <ProductCard item={menu}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;