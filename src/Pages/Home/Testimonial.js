import React from 'react';
import quote from '../../assets/icons/quote.svg';
import pepole1 from '../../assets/images/people1.png';
import pepole2 from '../../assets/images/people2.png';
import pepole3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Arafat Bappy',
            review: 'We are truly impressed for your excellent service. Thank you so much for providing such wonderful service. The doctors and staff are very friendly.',
            location: 'Bangladesh',
            img: pepole1

        },
        {
            _id: 2,
            name: 'Flora dell',
            review: 'Their service is very helpful. They assisted me in getting a hospital invitation letter for my parents, which was used to obtain a medical and attendee visa to Chennai. As a liaison for the hospital, they demonstrated professionalism, communication, and courtesy throughout the process.',
            location: 'Bangladesh',
            img: pepole2

        },
        {
            _id: 3,
            name: 'Sung Lee',
            review: 'i m giving 5 star for their services.. i m very much satisfied with their services.. though its lockdown they manage teleconferences with the doctors.. They helped me a lot.. They tried heart and soul.. thank u...',
            location: 'Bangladesh',
            img: pepole3

        }
    ];
    return (
        <section className='my-15'>
            <div className='flex justify-between'>
                <div className=''>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>What Our Patients Say</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;