import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import MakeAppointement from '../MakeAppointement/MakeAppointement';
import Services from '../Service/Services';
import Testomianal from '../Testomianal/Testomianal';
import YoursTrams from '../YoursTrams/YoursTrams';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <YoursTrams></YoursTrams>
            <MakeAppointement></MakeAppointement>
            <Testomianal></Testomianal>
        </div>
    );
};

export default Home;