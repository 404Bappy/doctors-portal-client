import React from 'react';

const Service = ({ service }) => {
    const { name, Slots } = service;
    return (
        <div class="card lg:max-width bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary justify-center">{name}</h2>
                <p>{
                    Slots.length  > 0
                    ?<span>{Slots[0]}</span>
                    : <span className='text-red-500' >Try Another Date</span>
                    }</p>
                   <p>{Slots.length} {Slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                    <button disabled={Slots.length=== 0} class="btn btn-secondary text-white ">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;