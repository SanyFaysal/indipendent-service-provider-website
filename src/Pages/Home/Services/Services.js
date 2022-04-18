import React from 'react';
import Service from '../Service/Service';
import service1 from '../../../Images/services/service01.jpg'
import service2 from '../../../Images/services/service02.jpg'
import service3 from '../../../Images/services/service03.jpg'
import service4 from '../../../Images/services/service04.jpg'
const Services = () => {
    const services = [
        { id: '1', name: 'SSC examinee', img: service1, subject: 'Math & science', days: 'Sat, Mon, Wed, Fri', at: '(7 Am - 9 Am', price: "25000" },
        { id: '2', name: 'ClASS 10', img: service1, subject: 'Math & science', days: 'Sun, Tues, wed, Fri', at: '8 Am- 10 AM', price: "2000" },
        { id: '3', name: 'ClASS 9', img: service1, subject: 'Math & science', days: 'Sat Mon, Wed, Fri', at: '3 PM - 5 PM', price: "2000" },
        { id: '4', name: 'CLASS 8', img: service2, subject: 'Math & Others', days: 'Sun, Mon, Wed, Thu', at: '5 PM - 7 PM', price: "1500" },
        { id: '5', name: 'CLASS 7', img: service3, subject: 'Math & Others', days: 'Sat, Mon Tues Fri', at: '3 PM -5 PM', price: "1200" },
        { id: '6', name: 'ClASS 6', img: service4, subject: 'Math & Others', days: 'sun, Tues, Wed, Fri', at: '5 Am - 7 AM', price: "1000" },
    ]
    return (
        <div className='bg-info bg-opacity-10 pt-4' id="services">
            <h1 className='text-center text-warning'>My Services </h1>
            <div className='row container mx-auto d-flex justify-content-center align-items-center '>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;