import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {
    const [checked, setChecked] = useState(false);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleRegister = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        let email = event.target.email.value;
        let password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='row mb-5 h-100 '>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12 shadow mx-auto border bg-secondary  bg-opacity-10 rounded rounded-2 px-5 pb-4'>
                <h2 className='text-center'>Register Account</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="name" placeholder="your name" name='name' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setChecked(!checked)} className={`${checked ? 'text-success' : 'text-danger'}`} type="checkbox" label="Accept terms and condition" />
                    </Form.Group>
                    <Button disabled={!checked} variant="primary" type="submit" className='w-100 rounded-pill'>
                        Register
                    </Button>
                    <div className='my-2'>
                        <span>Already have an account?</span><Link to='/login' className='text-decoration-none fw-bold text-success text-opacity-75'> Go to login</Link>
                    </div>
                </Form>
                {error && <p className='text-danger text-center'>{error.message}</p>}
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;