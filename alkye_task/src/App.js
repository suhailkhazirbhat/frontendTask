import React from 'react';
import './App.css';

import Dulethird from './components/Dulethird';
import DuleFour from './components/DuleFour';
import DuleFive from './components/DuleFive';
import DuleSix from './components/DuleSix';
import Footer from './components/Footer';

import DuleSecond from './components/DuleSecond';
import DuleFirst from './components/DuleFirst';



function App() {
  return (
    <>
    <div className='maindivv' >
     
       <DuleFirst/>
       <DuleSecond/>
       <Dulethird/>
       <DuleFour/>
       <DuleFive/>
       <DuleSix/>
       <Footer/>
       </div>
       
        
     
    </>
  );
}

export default App;
