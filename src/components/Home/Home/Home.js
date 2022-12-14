import React from 'react';
import { Card, Button, Col, Container, Form, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid>
            <div className='my-5'>
                <h2 className='fw-semibold text-primary mb-3'>Request testnet LINK</h2>
                <p className='w-50'>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
            </div>
            <Card className='border-0 rounded-0 p-3 mb-4'>
                <Row>
                        <p >
                            Your wallet is connected to Ethereum Kovan, so you are requesting Ethereum Kovan Link/ETH.
                        </p>
                    <Col md={6}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label className='text-primary fw-semibold'>Wallet Address</Form.Label>
                                <Form.Control className='rounded-1' type="text" placeholder="Wallet Address..." />
                            </Form.Group>
                            <Form.Group className="mb-3 row">
                                <Col>
                                    <Form.Label className='text-primary fw-semibold'>Request Type</Form.Label>
                                    <Form.Control className='rounded-1' type="text" value='20 Test Link' disabled />
                                </Col>
                                <Col>
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control className='rounded-1' type="text" value='0.5 ETH' disabled />
                                </Col>
                            </Form.Group>
                            <Button className='rounded-1' variant="primary" type="submit">
                                Send Request
                            </Button>
                        </Form>
                        <div className='mt-4'>
                            <h2 className='mb-2'>Request History</h2>
                            <Button className='me-2 rounded-1'>ETH Transaction History</Button>
                            <Button variant='secondary' className='me-2 rounded-1'>TestLink Transaction History</Button>
                        </div>
                        <table className="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>Sr</th>
                                    <th>Time</th>
                                    <th>Amount</th>
                                    <th>Hash</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>12:30 AM</td>
                                    <td>487</td>
                                    <td>4s8er5s5fe57rjmxnfuewrurks</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>10:30 AM</td>
                                    <td>875</td>
                                    <td>sf7s7ers4e7r7wser</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>11:30 AM</td>
                                    <td>797</td>
                                    <td>se4s7er7</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default Home;