import React, { useContext } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import {useQuery} from '@tanstack/react-query'

const MyAppointment = () => {
  const {user} =useContext(AuthContext);

  const url =`http://localhost:5000/bookings?email=${user?.email}`;
  const {data: bookings =[]} =useQuery({
    queryKey:['bookings', user?.email],
    queryFn: async () =>{
      const res =await fetch(url);
      const data =await res.json();
      return data;
    }
  })
    return (
        <div>
            <h3 className='text-3xl mb-5'>My Appointment</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map((booking, i) =><tr>
          <th>{i}</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
          <td>Blue</td>
        </tr>)
      }
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default MyAppointment;