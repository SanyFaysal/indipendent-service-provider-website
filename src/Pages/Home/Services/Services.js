import React from 'react';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        { id: '1', name: 'SSC examinee', subject: 'Mathematics', days: 'Sat, Mon, Wed, Fri', at: '(7 Am - 8 Am', price: "1200" },
        { id: '2', name: 'ClASS 10', subject: 'Mathematics', days: 'Sun, Tues, wed, Fri', at: '8 Am- 9 AM', price: "1000" },
        { id: '3', name: 'ClASS 9', subject: 'Math and Science', days: 'Sat Mon, Wed, Fri', at: '4 PM - 5 PM', price: "1000" },
        { id: '4', name: 'CLASS 8', subject: 'Math and Science', days: 'Sun, Mon, Wed, Thu', at: '5 PM - 6 PM', price: "800" },
        { id: '5', name: 'CLASS 7', subject: 'Math and Science', days: 'Sat, Mon Tues Fri', at: '3 PM -4 PM', price: "700" },
        { id: '6', name: 'ClASS 6', subject: 'Math and Science', days: 'sun, Tues, Wed, Fri', at: '6 Am - 7 AM', price: "500" },
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