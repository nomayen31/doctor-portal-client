import React, { useContext } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import {useQuery} from '@tanstack/react-query'

const MyAppointment = () => {
  const {user} =useContext(AuthContext);

  const url =`http://localhost:5000/bookings?email = ${user?.email}`;
  const {} =useQuery({
    queryKey:['bookings']
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
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default MyAppointment;