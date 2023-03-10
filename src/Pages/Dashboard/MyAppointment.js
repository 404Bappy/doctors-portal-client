import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {

    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigaate = useNavigate()

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:9000/booking?patient=${user.email}`, {
                //method: 'GET',
                //headers:{
                   // 'authorization': `Bearer${localStorage.getItem('accessToken')}`
               //hy }
            })
        .then(res=> {
            //console.log('res', res);
            
           return res.json()
        })
        .then(data => {
            setAppointments(data);
        });
        }
    } , [user])

    return (
        <div>
            <h2>My Appointments : {appointments.length}</h2>

            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
        {
           appointments.map((a, index) =>     <tr>
            <th>{index +1 }</th>
            <td>{a.patientName}</td>
            <td>{a.date}</td>
            <td>{a.slot}</td>
            <td>{a.treatmentName}</td>
           
          </tr>) 
        }
      
     
  
    </tbody>
  </table>
</div>

        </div>
    );
};

export default MyAppointment;