import React from 'react';
import porfile from './assests/Group 8.png'
const Five = () => {
    return (
        <>

            <div className='ccccc'>
                <div id='bbb33'>
                    <div style={{ padding: '40%' }}>
                        {/* Outer div */}
                        <div className='Inner_div'>
                            {/* Inner div aligned at center */}
                            <div className='center_img'>

                            </div>

                        </div>
                    </div>
                </div>



                <div id='bbb22'>

                    {/* Inner div aligned at center */}
                    <div style={{
                        width: '71%',
                        color: "white",
                        marginLeft: "27%"
                    }}>
                        <div className='coma'></div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.

                        Title
                        Name

                        <br></br>
                        <br></br>
                        <p><img src={porfile} style={{ display: 'inline', marginRight: '20px' }} /><strong>Read my story</strong></p>
                    </div>




                </div>

            </div>
        </>
    );
};

export default Five;
