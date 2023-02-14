import React from 'react';
import chiar1 from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = () => {
    return (
        <header>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chiar1} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker></DayPicker>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;