import React from 'react';
import Footer from '../../Shared/Footer/Footer';

const Blogs = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='border p-4'>
                    <h3 className='text-danger'>What are the difference between authorization and authentication?</h3>
                    <p>Authentication is the process of verifying someones information . it works by getting users password, name, email, phone number or photo and other information and it is the first step for accessing into management process . It can be changed and it is also visible to the user. <br />
                        Authorization defines someone what kind of resources he can get access. it works through the organization . It takes place after authentication. It can't be changed or it is not seen by the user. </p>
                </div>
                <div className='border my-4 p-4'>
                    <h3 className='text-danger'>Why are we using firebase ?</h3>
                    <p>Firebase can manage all data real-time in the database. So the exchange of data to the from the data base is so easy and quick. By using it we can create Application without backend server. We can display quickly display data in the application faster than any backend web services . We can make dynamic linking . Its one of the great feature is it can be use in machine learning and so on.</p>
                    <h3 className='text-danger'>What is the other option we have to implement authentication? </h3>
                    <p> The alternative ways to implement authentication of firebase are Parse, Back4App , AWS Amplify, Kuzzle, Couchbase, NativeScript and so many  which are a complete  source application stack and backend framework that offers a collection of tools and features to  develop an application </p>
                </div>
                <div className='border p-4'>
                    <h3 className='text-danger'>What other services does firebase provide other than authentication?</h3>
                    <p>Firebase provides so many services other than authentication like-<br />
                        <b>Realtime database</b><br />
                        <span>Data is synced across all clients in realtime and remains available even when an app goes offline.</span><br />
                        <b> Hosting</b><br />
                        <span>Firebase Hosting provides fast hosting for a web app.</span><br />
                        <b> Test lab</b><br />
                        <span>The application is tested on virtual and physical devices located in Google's data centers.</span><br />
                        <b>Notification</b><br />
                        <span>Notification can be sent with firebase with additional coding . Users can get started firebase for free.</span><br />
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Blogs;