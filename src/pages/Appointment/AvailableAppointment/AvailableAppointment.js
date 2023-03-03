import { format } from 'date-fns';
import {useQuery} from '@tanstack/react-query'
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([])

    const [treatment, setTreatment] = useState(null);

    const date = format(selectedDate, 'pp');

    const {data:appointmentOptions = []}= useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn:() =>fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        .then(res => res.json())
    })

    

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data));
    // }, [])
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointment on {format(selectedDate, 'PP')} </p>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOptions
                        key={option._id}
                        appointmentOptions={option}
                        setTreatment={setTreatment}

                    ></AppointmentOptions>)
                }
            </div>
            {   
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                ></BookingModal>

            }
        </section>
    );
};

export default AvailableAppointment;