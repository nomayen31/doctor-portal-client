import React from 'react';
import background from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section className=''style={{
            background: `url(${background})`
        }}>
            <div className='text-center mb-8'>
                <h3 className='text-primary font-bold  text-lg'>Contact Us</h3>
                <h1 className='text-black text-3xl'>Stay connected with us</h1>
            </div>
            
        </section>
    );
};

export default ContactUs;