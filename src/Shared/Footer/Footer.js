

import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='w-100 mx-auto text-center py-3 bg-dark text-secondary'>
            <small className='text-center  my-4'>Copy right © {year}</small>
        </div>
    );
};

export default Footer;