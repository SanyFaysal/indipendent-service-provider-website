import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center my-5'>
            <Spinner animation="grow" variant="primary "></Spinner>
        </div>
    );
};

export default Loading;