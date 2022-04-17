import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Service = ({ service }) => {
    const { name, subject, days, at, price } = service;
    return (
        <div className='col col-xl-3 col-lg-3 col-md-4 col-sm-10 col-10 shadow bg-warning bg-opacity-10 rounded d-inline w-full m-3 px-4 py-4'>
            <h3 className='text-center text-bold'>{name}</h3>
            <p>
                <FontAwesomeIcon className='text-warning fs-6' icon={faStarOfLife}></FontAwesomeIcon>
                <span className="ps-2 ">Subject :{subject} </span>
            </p>
            <p>
                <FontAwesomeIcon className='text-warning' icon={faStarOfLife}></FontAwesomeIcon>
                <span className="ps-2 ">weekly :{days} </span>
            </p>
            <p>
                <FontAwesomeIcon className='text-warning' icon={faStarOfLife}></FontAwesomeIcon>
                <span className="ps-2 ">Shedule time:{at} </span>
            </p>
            <p>
                <FontAwesomeIcon className='text-warning' icon={faStarOfLife}></FontAwesomeIcon>
                <span className="ps-2 fw-bold fs-5 text-gray"> {price} BDT/month</span>
            </p>
            <button className='btn btn-pill btn-success w-100'>Procced Check Out</button>
        </div>
    );
};

export default Service;