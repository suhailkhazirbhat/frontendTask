import React from 'react';

import lll from '../components/assests//Rectangle\ 29.png'

const DuleFour = () => {
    return (
        <>
        <div className='four-section'>
            <div className='ccc'>
                <div className='bbb' id='bbb1'></div>
                <div className='bbb' id='bbb2'></div>
                <div className='bbb' id='bbb3'></div>
                <div className='bbb' id='bbb4'></div>
                <div className='bbb' id='bbb5'></div>
                <div className='bbb' id='bbb6'></div>
            </div>
            

            <div style={{display:'flex'}}>
                <div style={{ fontFamily: 'Oswald', fontSize: '14px',width:'50%',padding:'3%'  }} ><h1>Employee <span style={{ color: '#F36F2B' }}>Appreciation Program</span> </h1> <p>Our Employee Appreciation Program is tailored to honor the ongoing commitment and efforts of our long-serving team members. Our 5 Year Club
                    and 10 Year Club are special milestones within this program, celebrating employees who have dedicated half a decade or a full decade to our
                    company mission. Each year, members of these clubs are invited to annual events held at select, memorable locations, reflecting our gratitude and
                    recognition of their unwavering dedication. It's our way of saying thank you and ensuring that every significant chapter in our collective journey is
                    celebrated with the grandeur it deserves
                </p></div>
                
                <img src={lll}  style={{width:'50%'}} />
            </div>


            <div style={{display:'flex'}}>

                  <div className='bbb'id='bbb9'></div>
                <div className='bbb'id='bbb10'></div>
            </div>
            </div>
        </>
    );
};

export default DuleFour;
