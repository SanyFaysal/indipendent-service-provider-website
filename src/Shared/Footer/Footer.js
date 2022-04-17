import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {

    return (
        <div className='my-5'>
            <small className='text-center  my-4'>Copy right <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon></small>
        </div>
    );
};

export default Footer;