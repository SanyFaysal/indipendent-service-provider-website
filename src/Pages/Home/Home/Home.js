import React from 'react';
import banner from '../../../Images/banner/banner.png'
import Footer from '../../../Shared/Footer/Footer';
import About from '../About/About';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='banner-container'>
                <div className='pt-4 row container  mx-auto d-flex justify-content-center'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 my-auto '>
                        <h4 className='text-white'>Hello, I'm </h4>
                        <h1 className='fs-1 text-white lh-0'><span>Abu Hanif Sohel </span></h1>
                        <p className='fs-5 text-white'>An experienced mathematics teacher who knows the methodology of teaching mathematics in high school.</p>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center'>
                        <img style={{ width: '350px' }} src={banner} alt="" />
                    </div>
                </div >
            </div>

            <About></About>

            <div id='services' >
                <Services></Services>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;