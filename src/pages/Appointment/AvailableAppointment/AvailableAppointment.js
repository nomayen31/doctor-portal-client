import { format } from 'date-fns';
import {useQuery} from '@tanstack/react-query'
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOptions from './AppointmentOptions';
import Loading from '../../Shared/Loading/Loading';
const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'pp');
    const {data:appointmentOptions = [], refetch, isLoading}= useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn:async() =>{
            const res =await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
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
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};
export default AvailableAppointment;