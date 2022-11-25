import React from 'react'
import { Link } from 'react-router-dom'

import Information from './assets/pages/information/Infromation.tsx'
import Footer from './assets/components/footer/Footer.tsx'
import Header from './assets/components/header/Header.tsx'
import Timetable from './assets/pages/timetable/Timatable.tsx'


import './App.scss'


const App: React.FC = () => {
  return (
    <div className="App">

      <Header/>

      <div className="main">

        {/* <Information/> */}
        <Timetable/>

      </div>

      <Footer/>


    </div>
  );
}

export default App;
