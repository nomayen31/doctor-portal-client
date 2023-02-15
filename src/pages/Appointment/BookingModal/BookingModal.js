import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, selectedDate}) => {
    const {name} =treatment;
    const date =format(selectedDate, 'PP')
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-col-1 gap-3 mt-10'>
                    <input type="text" disabled value={date} className="input w-full input-bordered " />
                    <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                    <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                    <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                    <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                    <br></br>
                    <input className='btn btn-accent w-full input-bordered max-w-xm' type="submit" value="submit"></input>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;