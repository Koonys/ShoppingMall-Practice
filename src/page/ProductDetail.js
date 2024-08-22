import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const ProductDetail = () => {

    const navigate=useNavigate();
    const productAll = ()=>{
        navigate('/')
    }

    return (
        <div>
            <Container>
                <Row className={'detail-product justify-content-center'}>
                    <Col md={4}>
                        <img src={"https://noona-hnm.netlify.app/pattern-jacket.jpeg"} alt={""}/>
                    </Col>
                    <Col md={6} className={'d-flex flex-column'}>
                        <div className={'mb-3'}>
                            <h2>상품명</h2>
                            <h2>가격</h2>
                            <h2>사이즈</h2>
                        </div>
                        <div className={'mt-auto btn-container'}>
                            <Button onClick={productAll} variant={'dark'} className={'rounded m-1'}>계속 쇼핑하기</Button>
                            <Button variant={'dark'} className={'rounded m-1'}>장바구니 담기</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetail;