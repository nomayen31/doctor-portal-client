import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')

    const handleBooking = e=>{
        e.preventDefault();
        const form =e.target;
        const slot =form.slot.value;
        const name= form.name.value;
        const email =form.email.value;
        const phone =form.phone.value;

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-col-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select name='slot' className="select select-bordered w-full ">
                            
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered " />
                        <input name='email' type="email" placeholder="Email Address" className="input w-full input-bordered " />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                        <br></br>
                        <input name='phone' className='btn btn-accent w-full input-bordered max-w-xm' placeholder='Your Phone number' type="submit" value="submit"></input>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;