import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse gap-40">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />

                    <p className='pl-6'>You have selected: {format(date, 'PP')}</p>
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;