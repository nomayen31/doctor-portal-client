import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';
import ServiceTitle from './ServiceTitle';


const Services = () => {
    const serviceData =[
        {
            id: 1,
            name:'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
            bgClass:'bg-white'
        },
        {
            id: 2,
            name:'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the   ',
            icon:whitening,
            bgClass:'bg-white'
        },
        {
            id: 3,
            name:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
            bgClass:'bg-white'
        }
    ]
    return (
        
        <div className='grid mt-6 gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
            {
                serviceData.map(service =><Service
                    key={service.id}
                    service={service}
                    ></Service>)
            }
        </div>
    );
};

export default Services;