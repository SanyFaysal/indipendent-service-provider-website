import React from 'react';
import banner from '../../../Images/banner/banner.png'
import About from './About/About';

const Home = () => {
    return (
        <>
            <div className='bg-info bg-opacity-10 '>
                <div className='py-4 row cols-md-6 cols-sm-12 cols-lg-6 container  mx-auto d-flex justify-content-around'>
                    <div className='col my-auto mx-auto'>
                        <h4>Hello, I'm </h4>
                        <h1 className='fs-1 text-info lh-0'><span>Abu Hanif Sohel </span></h1>
                        <p className='fs-4'>An experienced mathematics teacher who knows the methodology of teaching mathematics in high school.</p>
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <img style={{ width: '350px' }} src={banner} alt="" />
                    </div>
                </div >
            </div>
            <div>
                <About></About>
            </div>
        </>
    );
};

export default Home;