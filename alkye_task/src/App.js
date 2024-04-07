import React from 'react';
import './App.css';
import Header from './components/Header';
import MyCarousel from './components/MyCarousel';
import Tabs from './components/Tabs';
import MobileNavigation from './components/MobileNavigation';
import Second from './components/Second';
import Third from './components/Third';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className='hh'>
        
        <MobileNavigation/>
       </div>
        <MyCarousel />
       <Tabs />
       <Second/>
       <Third/>
       <Four/>
       <Five/>
       <Six/>
       <Footer/>
       
        
     
    </>
  );
}

export default App;
