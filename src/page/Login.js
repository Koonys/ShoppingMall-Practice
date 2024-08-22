import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Login = ({setAuthenticate}) => {

    const navigate = useNavigate();
    const loginUser = (e) => {
        e.preventDefault();
        setAuthenticate(true);
        navigate('/');
    }
    return (
        <div>
           <Container>
                <Row className={`justify-content-center align-items-center`}>
                    <Col md={6} lg={4}>
                        <div className={'login-section p-4 shadow-sm rounded bg-white'}>
                            <h2>Login</h2>
                            <Form onSubmit={(event)=>loginUser(event)}>
                                <Form.Group>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type={'email'} placeholder={'Enter Email'}></Form.Control>
                                </Form.Group>

                                <Form.Group className={'mt-3'}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type={'password'} placeholder={'Password'}></Form.Control>
                                </Form.Group>

                                <Button variant={`primary`} type={`submit`} className={`w-100 mt-4`}>Login</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
           </Container>
        </div>
    );
};

export default Login;