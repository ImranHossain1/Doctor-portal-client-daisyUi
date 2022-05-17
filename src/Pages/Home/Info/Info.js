import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <InfoCard cardTitle="Openning Hours" img={clock}  bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
            <InfoCard cardTitle="Our Locations" img={marker} bgClass='bg-accent'></InfoCard>
            <InfoCard cardTitle="Contact Us" img={phone} bgClass='bg-gradient-to-r from-secondary to-primary'></InfoCard>
        </div>
    );
};

export default Info;