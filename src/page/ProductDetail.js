import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Dropdown, DropdownButton, Row} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";

const ProductDetail = () => {

    const navigate=useNavigate();
    const productAll = ()=>{
        navigate('/')
    }

    let {id} = useParams();
    const [product, setProduct] = useState(null);
    const [size, setSize] = useState("사이즈");
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/Koonys/ShoppingMall-Practice/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }

    const sizeClick = (props) => {
        setSize(props);
    }

    useEffect(() => {
        getProductDetail()
    }, [size]);

    return (
            <Container>
                <Row className={'detail-product justify-content-center'}>
                    <Col md={4}>
                        <img src={product?.img} alt={""}/>
                    </Col>
                    <Col md={6} className={'d-flex flex-column'}>
                        <div className={'mb-3'}>
                            <h5>{product?.choice === true ? "추천상품" : ""}</h5>
                            <h2>{product?.title}</h2>
                            <h2>₩{product?.price.toLocaleString()}</h2>
                            <DropdownButton variant={'secondary'} title={size} className={"size-drop"}>
                                <Dropdown.ItemText>사이즈를 선택하세요</Dropdown.ItemText>
                                <Dropdown.Item
                                    onClick={() => sizeClick(product?.size[0])}>{product?.size[0]}</Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => sizeClick(product?.size[1])}>{product?.size[1]}</Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => sizeClick(product?.size[2])}>{product?.size[2]}</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className={'mt-auto btn-container'}>
                            <Button onClick={productAll} variant={'dark'} className={'rounded m-1'}>계속 쇼핑하기</Button>
                            <Button variant={'dark'} className={'rounded m-1'}>장바구니 담기</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
    );
};

export default ProductDetail;