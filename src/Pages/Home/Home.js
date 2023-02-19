import React from 'react';
import Banner from './Banner';
import Cares from './Cares';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';
import InfoCard from './InfoCard';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info ></Info>
           
            <Services></Services>
            <Cares></Cares>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;