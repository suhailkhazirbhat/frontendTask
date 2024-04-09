import React from 'react';
import { Carousel } from 'react-bootstrap';
import Capture1 from './assests/Group 12.png'
import '../App.css'
import MobileNavigation from './MobileNavigation';

function MyCarousel() {
  return (
    <Carousel >
 
        
      <Carousel.Item>
      <div className='task'>
  <p>Home / Why work with us</p>
        <h1>Headline #1</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        <img
          className="d-block w-100"
          src={Capture1}
          alt="First slide"
          
        />
     
      </Carousel.Item>
      <Carousel.Item>
      <div className='task'>
  <p style={{fontFamily:'Inter'}}>Home / Why work with us</p>
        <h1 style={{fontFamily:'Oswald'}}>Headline #1</h1>
      <p style={{fontFamily:'Inter'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
      <div className='task'>
  <h3>Home / Wmy work with us</h3>
        <h1>Headline #1</h1>
      <p className='line'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
