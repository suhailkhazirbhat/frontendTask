import React from 'react';
import './App.css';
import Header from './components/Header';
import MyCarousel from './components/MyCarousel';
import Tabs from './components/Tabs';
import MobileNavigation from './components/MobileNavigation';
import Second from './components/Second';
import Dulethird from './components/Dulethird';
import Four from './components/Four';
import DuleFive from './components/DuleFive';
import Six from './components/Six';
import Footer from './components/Footer';
// import { First } from 'react-bootstrap/esm/PageItem';
import DuleSecond from './components/DuleSecond';
import DuleFirst from './components/DuleFirst';



function App() {
  return (
    <>
    <div className='maindivv' >
      {/* <div className='hh'>
        
        <MobileNavigation/>
       </div>
        <MyCarousel />
       <Tabs /> */}
      
       {/* <Second/> */}
       {/* <div></div> */}
       <DuleFirst/>
       <DuleSecond/>
       <Dulethird/>
       <Four/>
       <DuleFive/>
       <Six/>
       <Footer/>
       </div>
       
        
     
    </>
  );
}

export default App;
