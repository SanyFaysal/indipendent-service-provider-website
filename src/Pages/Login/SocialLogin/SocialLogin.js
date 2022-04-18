
import React from 'react';
import google from '../../../Images/social/google.png';
import facebook from '../../../Images/social/facebook.png';
import github from '../../../Images/social/github.png'
const SocialLogin = () => {
    return (
        <div className='w-100 mx-auto mt-3'>
            <div className='mb-3'>
                <div className='d-flex align-items-center'>
                    <div className='bg-secondary bg-opacity-50 w-50' style={{ height: '1px' }}></div>
                    <div className='px-2'>Or</div>
                    <div className='bg-secondary bg-opacity-50 w-50' style={{ height: '1px' }}></div>
                </div>
            </div>
            <div>
                <button className='d-block rounded-pill w-100 btn bg-warning fs-bold bg-opacity-75'>
                    <img src={google} style={{ width: '25px', marginRight: '3px' }} alt="" />
                    Google Login
                </button>
                <button className='d-block w-100 btn bg-warning rounded-pill bg-opacity-75 my-2'>
                    <img src={facebook} style={{ width: '25px', marginRight: '2px' }} alt="" />
                    FaceBook Login
                </button>
                <button className='d-block w-100 btn bg-warning bg-opacity-75 rounded-pill' >
                    <img src={github} style={{ width: '25px', marginRight: '2px' }} alt="" />
                    Github Login
                </button>
            </div>
        </div>
    );
};
export default SocialLogin;