import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
                    <p className="py-6">We are Doctors Portal LTD in Bangladesh. We connect patients from Bangladesh to the relevant Senior Consultant from Apollo Hospitals Chennai, and provide clear, concise and consolidated information about the treatment options available in Apollo Hospitals Chennai to ensure patients from Bangladesh can make well informed decisions before travelling for medical treatment..</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;