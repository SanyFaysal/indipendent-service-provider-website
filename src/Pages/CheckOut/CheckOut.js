import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const CheckOut = () => {
    const [agree, setAgree] = useState(false)
    const [user] = useAuthState(auth)
    const handleCheckOut = () => {
        toast('Thank you for the booking')

    }
    return (
        <div className='col col-lg-6 col-md-6 col-sm-12 col-12 shadow mx-auto border bg-secondary  bg-opacity-10 rounded rounded-2 px-5 pb-4'>
            <h2 className='text-center'>Proceed Check Out</h2>
            <Form onSubmit={handleCheckOut}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={user?.email} readOnly />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="e" placeholder="address" name='address' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="phone number" name='phone number' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} className={`${agree ? 'text-success' : 'text-danger'}`} type="checkbox" label="Accept terms and condition" />
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit" className='w-100 rounded-pill'>
                    Check Out
                </Button>
            </Form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CheckOut;