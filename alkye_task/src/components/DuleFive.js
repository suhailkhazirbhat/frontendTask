import React from 'react';
import porfile from './assests/Group 8.png'
const DuleFive = () => {
    return (
        <>
            <div>

                <div style={{
                    backgroundColor: '#112C41', display: 'flex',
                    flexWrap: 'nowrap',width:'100%'
                }}>
                    <div style={{ display: 'inline', width:'100%'}}>
                    <div style={{ marginTop: '25%',marginLeft:'20%' }}>
                            <div className='center_img'>
                             </div>
                    </div>
                    </div>
                    <div style={{ display: 'inline', color: 'white',fontSize: '12px',width:'%100' }}>
                        <div style={{margin:'20%'}}>
                             <div className='coma'></div>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.                            Title
                            Name</p>

                        <br></br>
                        <br></br>
                        <p><img src={porfile} style={{ display: 'inline', marginRight: '20px' }} /><strong>Read my story</strong></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DuleFive;
