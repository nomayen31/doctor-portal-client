import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import img1 from '../../../assets/images/people1.png'
import img2 from '../../../assets/images/people2.png'
import img3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testomianal = () => {

    const reviews =[
        {
            _id:1,
            name:'Winson Herry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'California',
            img:img1
        },
        {
            _id:2,
            name:'Winson Herry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'California',
            img:img2
        },
        {
            _id:3 ,
            name:'Winson Herry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'California',
            img:img3
        }
    ]
    return (
      <section className='my-16'>
        <div>
            <div className='flex justify-between'>
                <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                <h2 className='text-4xl'>What Our Patients Says</h2>
                <figure>
                    <img className='w-24 lg:w-48 ' src={quote} alt=''></img>
                </figure>
            </div>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                reviews.map(review =><Review
                key={review._id}
                review={review}
                ></Review>)
            }
        </div>
      </section>
    );
};

export default Testomianal;