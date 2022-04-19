import { faBriefcase, faFaceSmile, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
    return (
        <div>
            <h2 className='text-center text-info mt-2'>Who Am I ..?</h2>
            <div className='d-flex container mx-auto row d-flex justify-content-evenly align-items-center'>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                    <p>An experienced mathematics teacher who khows the methodology of teaching mathematics in
                        high school. I have been preparing my graduation from Bhawyal Bodre Alam Govt College
                        in Mathematics. I try to serve them a sound knowledge of mathematics, promotes mathematical understanding,
                        engages and motivates students, and requires effective management skills. </p>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 col-12  w-full border-start border-2 border-secondary'>
                    <p>
                        <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                        <span className='ms-2  d-inline'>7 years in the field of education</span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faFaceSmile}></FontAwesomeIcon>
                        <span className='ms-2  d-inline'>100+ satisfied students</span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon>
                        <span className='ms-2'>6 Awards in different competitions</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
