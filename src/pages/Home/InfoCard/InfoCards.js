import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData =[
        {
            id: 1,
            name:'Opening Hours',
            description:'open 9.00 am to 5.00Pm everyday',
            icon: clock,
            bgClass:'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name:'Our Location',
            description:'open 9.00 am to 5.00Pm everyday',
            icon:marker,
            bgClass:'bg-accent'
        },
        {
            id: 3,
            name:'Contact Us ',
            description:'+801760843880',
            icon: phone,
            bgClass:'bg-gradient-to-r from-primary to-secondary'
        }
    ]
    return (
        <div className='grid mt-8 gap-6 grid-cols-1
         lg:grid-cols-3 md:grid-cols-2'>
            {
                cardData.map(card =><InfoCard
                key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;