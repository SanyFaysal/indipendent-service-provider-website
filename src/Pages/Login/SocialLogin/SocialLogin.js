
import React from 'react';
import google from '../../../Images/social/google.png';
import facebook from '../../../Images/social/facebook.png';
import github from '../../../Images/social/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div className='w-100 mx-auto mt-3'>
            <div className='mb-3'>
                <div className='d-flex align-items-center'>
                    <div className='bg-secondary bg-opacity-50 w-50' style={{ height: '1px' }}></div>
                    <div className='px-2'>Or</div>
                    <div className='bg-secondary bg-opacity-50 w-50' style={{ height: '1px' }}></div>
                </div>
            </div>
            {error && <p className='text-danger text-center'>{error.message}</p>}
            <div>
                <button onClick={() => signInWithGoogle()} className='d-block rounded-pill w-100 btn bg-white fw-bold border shadow'>
                    <img src={google} style={{ width: '25px', marginRight: '3px' }} alt="" />
                    Google Login
                </button>
                <button className='d-block w-100 btn bg-white border shadow fw-bold  rounded-pill my-2'>
                    <img src={facebook} style={{ width: '25px', marginRight: '2px' }} alt="" />
                    FaceBook Login
                </button>
                <button className='d-block w-100 btn bg-white border shadow rounded-pill fw-bold' >
                    <img src={github} style={{ width: '25px', marginRight: '2px' }} alt="" />
                    Github Login
                </button>
            </div>
        </div>
    );
};
export default SocialLogin;