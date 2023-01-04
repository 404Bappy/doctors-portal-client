import React from 'react';
import treatment from '../../assets/images/treatment.png';

const Care = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, On Your Terms</h1>
                    <p className="py-6">In our friendly dental practice we believe in a professional, caring and individualized approach for each of our patients. Our patients’ comfort is our main concern and you can trust us to provide the best possible care of your oral health. We provide complete family dentistry including cosmetic dentistry, implants, crowns and bridges, dentures, periodontics, orthodontics, oral surgery and endodontics. Our staff are experienced, dental professionals who wish to make every patients visit to our office a positive, pleasant experience.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Care;