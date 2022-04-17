import React from 'react';
import banner from '../../../Images/banner/banner.png'
import About from '../About/About';
import Services from '../Services/Services';


const Home = () => {
    return (
        <>
            <div className='bg-info bg-opacity-10 '>
                <div className='pt-4 row container  mx-auto d-flex justify-content-around'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 my-auto '>
                        <h4>Hello, I'm </h4>
                        <h1 className='fs-1 text-info lh-0'><span>Abu Hanif Sohel </span></h1>
                        <p>An experienced mathematics teacher who knows the methodology of teaching mathematics in high school.</p>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12d-flex justify-content-center align-items-center'>
                        <img style={{ width: '350px' }} src={banner} alt="" />
                    </div>
                </div >
            </div>
            <About></About>
            <Services></Services>

        </>
    );
};

export default Home;