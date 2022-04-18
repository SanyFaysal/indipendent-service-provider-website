import React from 'react';
import { Toast } from 'react-bootstrap';

const Toastify = ({ children }) => {
    return (
        <Toast>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">{children}</strong>
            </Toast.Header>

        </Toast>
    );
};

export default Toastify
    ;