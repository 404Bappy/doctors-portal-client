import React from 'react';
import quote from '../../assets/icons/quote.svg';
import pepole1 from '../../assets/images/people1.png';
import pepole2 from '../../assets/images/people2.png';
import pepole3 from '../../assets/images/people3.png';

const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name: 'Arafat Bappy',
            review: '',
            img: pepole1

        },
        {
            _id:1,
            name: 'Arafat Bappy',
            review: '',
            img: pepole2

        },
        {
            _id:1,
            name: 'Arafat Bappy',
            review: '',
            img: pepole3

        }
    ];
    return (
        <section className='my-15'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>What Our Patients Say</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote}  alt="" />
                </div>

            </div>
            <div>
                
            </div>
        </section>
    );
};

export default Testimonial;