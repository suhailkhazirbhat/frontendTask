import React from 'react';
import ring from '../components/assests/Rectangle 649.png'
import arow from '../components/assests/Vector.png'
import MyCarousel from './MyCarousel';
import MobileNavigation from './MobileNavigation';


const DuleFirst = () => {
    return (
        <>
            <div className='first-section'>
                <div className='firstnav'><MobileNavigation/></div>
             
                <div ><MyCarousel/></div>
                <div className='firsttabcontainer'>
                    <div className='firsttab' >
                        <div className='toptabcont'>
                        <div style={{ padding: '12px', display: 'inline-block' }}>
                            <div style={{color: '#6B6B6B'}}>02</div>
                            <p style={{fontFamily:'Inter'}}>We believe in diversity & inclusion</p>

                        </div>
                        <div className='tabiconn' > <div style={{ display: 'inline-block' }}><img src={ring} /> </div><div style={{ display: 'inline-block', marginLeft: '-28px' }}><img src={arow} /></div>
                        </div>
                    </div></div>
                    <div className='firsttab' >  <div className='toptabcont'>
                        <div style={{ padding: '12px', display: 'inline-block' }}>
                            <div style={{color: '#6B6B6B'}}>02</div>
                            <p style={{fontFamily:'Inter'}}>We believe in diversity & inclusion</p>

                        </div>
                        <div className='tabiconn' > <div style={{ display: 'inline-block' }}><img src={ring} /> </div><div style={{ display: 'inline-block', marginLeft: '-28px' }}><img src={arow} /></div>
                        </div>
                    </div></div>
                    <div className='firsttab' >  <div className='toptabcont'>
                        <div style={{ padding: '12px', display: 'inline-block' }}>
                            <div style={{color: '#6B6B6B'}}>02</div>
                            <p style={{fontFamily:'Inter'}}>We believe in diversity & inclusion</p>

                        </div>
                        <div className='tabiconn' > <div style={{ display: 'inline-block' }}><img src={ring} /> </div><div style={{ display: 'inline-block', marginLeft: '-28px' }}><img src={arow} /></div>
                        </div>
                    </div></div>
                </div>

            </div>

        </>
    );
};

export default DuleFirst;
