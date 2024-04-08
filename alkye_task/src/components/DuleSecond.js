import React from 'react';
import textsideimg from './assests/Capture33.PNG'
import icon1 from './assests/Group 2.png';
import icon2 from './assests/Group 1.png';
import icon3 from './assests/Vector5.png';

const DuleSecond = () => {
    return (
        <>
           
                <div className='topsidetext'>
                    
                    
                    <div className='sidetext'>
                    <div style={{padding:'10px 30px 10px 60px'}}  >
                    
                    <h1>We  <span style={{color:'#F36F2B'}}>stay connected</span></h1>
                    <br></br>
                    <br></br>
                   <div ><img src={icon1} className='sidetexticon' />  <h3 style={{display:'inline'}}>Quarterly Business Updates</h3></div>
                   <br></br>
                    <p>We strive to stay connected as a team through communication and collaboration. This materialises every quarter through our Quarterly Business Update events. These gatherings are immersive sessions where every team
                        member, regardless of rank or tenure, comes together to contribute to our overarching business strategy, and stay connected. They are opportunities to learn from our seasoned leaders and to also share personal insights and achievements that can steer our collective future. In an ever-evolving engineering landscape, staying connected isn’t just a benefit—it’s essential.
                    </p>
                    <br></br>
                    <div><img src={icon2} className='sidetexticon' />  <h3 style={{display:'inline'}}>Industry Events & Networking</h3></div>
                    <br></br>
                    <div><img src={icon3} className='sidetexticon' />  <h3 style={{display:'inline'}}>Associations Memberships</h3></div>
                    </div>
                    </div>


                    <div className='topsideiimg'>
                       
                    <div  className='sideiimg' ></div>
          
                    </div>
                </div>
                
                
            
                </>
                );
};

                export default DuleSecond;
