import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/Button/PrimaryButton';
const AppointmentBanner = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img src={doctor} alt="" className='mt-[-150px]'/>
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make An Appointment Today</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt temporibus laboriosam tempore, eos corporis rem quae ipsam dicta inventore repellendus ab odio magnam perspiciatis, dolor obcaecati asperiores earum ut ad quasi dolore fugit aut adipisci ullam beatae. Fuga, suscipit placeat?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default AppointmentBanner;