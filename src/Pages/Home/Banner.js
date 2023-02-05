import React from 'react';
import chair from '../../assets/images/chairdp.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-lg shadow-3xl" />
                <div>
                    <h1 className="text-5xl font-bold text-rose-500">Your New Smile Start Here</h1>
                    <p className="py-6">We are Dentist Portal LTD in Bangladesh. We connect patients from Bangladesh to the relevant Senior Consultant from Apollo Hospitals Chennai, and provide clear, concise and consolidated information about the treatment options available in Apollo Hospitals Chennai to ensure patients from Bangladesh can make well informed decisions before travelling for medical treatment..</p>
                    <button className="btn btn-primary text-rose-500 uppercase text-white font-bold bg-gradien-to- from-secondar to-primar">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;