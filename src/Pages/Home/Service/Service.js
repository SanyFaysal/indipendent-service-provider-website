import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, subject, days, at, price, img } = service;
    const navigate = useNavigate()
    const proceedCheckOut = () => {
        navigate('/checkout');
    }
    return (
        <div className='col col-xl-3 col-lg-3 col-md-4 col-sm-10 col-10 shadow bg-warning bg-opacity-10 rounded d-inline w-full m-3 px-4 py-2'>
            <h3 className='text-center text-bold  mt-0'>{name}</h3>
            <div className='d-flex justify-content-center mb-3' >
                <img src={img} style={{ width: '200px', height: '180px', borderRadius: '10px' }} alt="" />
            </div>
            <p className='my-1'>
                <FontAwesomeIcon className='text-success fs-6' icon={faCircleArrowRight}></FontAwesomeIcon>
                <span className="ps-2 ">Subject :{subject} </span>
            </p>
            <p className='my-1'>
                <FontAwesomeIcon className='text-success' icon={faCircleArrowRight}></FontAwesomeIcon>
                <span className="ps-2 ">weekly :{days} </span>
            </p>
            <p className='my-1'>
                <FontAwesomeIcon className='text-success' icon={faCircleArrowRight}></FontAwesomeIcon>
                <span className="ps-2 ">Schedule time:{at} </span>
            </p>
            <p className='my-1'>
                <FontAwesomeIcon className='text-success' icon={faCircleArrowRight}></FontAwesomeIcon>
                <span className="ps-2 fw-bold fs-5 text-gray"> {price} BDT/month</span>
            </p>
            <button onClick={proceedCheckOut} className='btn btn-pill btn-success w-100 mt-1' >Proceed Check Out</button>
        </div>
    );
};

export default Service;