import React from 'react';
import Banner from './Banner';
import Cares from './Cares';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info ></Info>
            <Services></Services>
            <Cares></Cares>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;