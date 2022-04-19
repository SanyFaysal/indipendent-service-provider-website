import React from 'react';
import { Button, Card } from 'react-bootstrap';
import image from '../../../src/Images/me/me.png'
import Footer from '../../Shared/Footer/Footer';
const AboutMe = () => {
    return (
        <div>
            <div className='bg-info bg-opacity-10 pb-4'>
                <div className='pt-4 row container  mx-auto d-flex justify-content-around'>
                    <div className='  text-center'>
                        <img style={{ width: '160px', borderRadius: '50%', backgroundColor: 'skyblue' }} src={image} alt="" />
                        <h3>I'm</h3>
                        <h2 className='fs-1 text-info lh-0'><span>Abu Sani Faysal </span></h2>
                        <h5>I completed my HSC examination last year.
                            In COVID pandemic time my academic education was going so slow and then I used to  mobile phone.My parents was so upset about my those activitise. At a time I realized that it is not life then I was searching a video of motivation and I found Jhanker Mahbub Sir Carrier guideline. From that I first Knew Jhankar Mahbub sir , programming hero and about web development and it was in august. So then I had 3, 4 months to get admitted into 'Batch 5'. Then I started my journey from free resources . Then I admitted into this course.<br />
                            <br />It was the first motivation I got to see the coupon code 'Hard Work' and till now I think about that coupon code that if I work hard then I can reach any where easily.
                            I dream every time that I will have a title "Web Developer / Software Engineer" and I will job in a IT company .In order to get this title ,from december 31 to today so many times I lag behind . At a time 3,4 modules  were  remain incomplete but then I thought about my dream that I must do it to reach my goal and then I take rest for sometimes. And start again . May Allah help me to reach to my goal.</h5>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default AboutMe;