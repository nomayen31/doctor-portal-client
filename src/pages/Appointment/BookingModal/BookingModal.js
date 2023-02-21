import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment,setTreatment ,selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')

    const handleBooking = e=>{
        e.preventDefault();
        const form =e.target;
        const slot =form.slot.value;
        const name= form.name.value;
        const email =form.email.value;
        [3,4,5].map((value, i) => console.log(value));
        const phone =form.phone.value;
        const booking={
          appointmentDate: date,
          treatment:name,
           patent: name,
            slot,
            email,
            phone,
        }
        console.log(booking);
        setTreatment(null);

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
                                slots.map((slot, i) => <option 
                                value={slot}
                                key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;