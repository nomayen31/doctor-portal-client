import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import Services from '../Service/Services';
import YoursTrams from '../YoursTrams/YoursTrams';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <YoursTrams></YoursTrams>
        </div>
    );
};

export default Home;