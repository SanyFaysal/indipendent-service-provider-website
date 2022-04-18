import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    return (
        <div className='row mb-5 h-100 '>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12 shadow mx-auto border bg-secondary  bg-opacity-10 rounded rounded-2 px-5 py-3'>
                <h2 className='text-center'>Please Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept terms and condition" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='w-100 rounded-pill'>
                        Login
                    </Button>
                    <div className='d-flex justify-content-between  my-2'>
                        <Link to='/register' className='text-decoration-none fw-bold text-success'>Create an Account</Link>
                        <span className='text-decoration-none text-danger fw-bold'>Reset Password</span>
                    </div>
                </Form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;