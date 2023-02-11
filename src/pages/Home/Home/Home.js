import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import Services from '../Service/Services';
import ServiceTitle from '../Service/ServiceTitle';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <ServiceTitle></ServiceTitle>
            <Services></Services>
        </div>
    );
};

export default Home;