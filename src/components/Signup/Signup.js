import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { AiFillFacebook, AiFillGoogleCircle, AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='account-form'>
            <div className='form-container'>
                <h2 className='text-center mb-3'>Sign Up</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <p className='fw-semibold my-3 text-center'>Already have an account? <Link to='/signup' className='text-decoration-none'>Login</Link></p>
                <p className='fw-semibold my-3 text-center'>Or</p>
                <div className='text-center fs-4'>
                    <Link className='text-secondary mx-2'>
                        <AiFillGoogleCircle />
                    </Link>
                    <Link className='text-secondary mx-2'>
                        <AiFillFacebook />
                    </Link>
                    <Link className='text-secondary mx-2'>
                        <AiFillInstagram />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;