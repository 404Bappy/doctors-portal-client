import React from 'react';
import chair from '../../assets/images/chairdp.png';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse gap-40">
                <img src={chair} class="max-w-lg rounded-lg shadow-3xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />


                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;