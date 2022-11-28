import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Information from './assets/pages/information/Infromation'
import Footer from './assets/components/footer/Footer'
import Header from './assets/components/header/Header'
import Timetable from './assets/pages/timetable/Timatable'
import News from './assets/pages/news/News'
import Courses from './assets/pages/courses/Courses'  
import CoursePage from './assets/pages/coursePage/CoursePage'

import './App.scss'


const App = () => {

  const [currentPage, setCurrentPage] = React.useState('main')

  return (
    <div className="App">

      <Header currentPage={currentPage}/>

      <div className="main">

        <Routes>
          <Route path="/" element={<Information setCurrentPage={(value) => setCurrentPage(value)}/>}/>
          <Route path="/timetable" element={<Timetable setCurrentPage={(value) => setCurrentPage(value)}/>}/>
          <Route path="/courses" element={<Courses setCurrentPage={(value) => setCurrentPage(value)}/>}/>
          <Route path="/courses/:id" element={<CoursePage setCurrentPage={(value) => setCurrentPage(value)}/>}/>
          <Route path="/news" element={<News setCurrentPage={(value) => setCurrentPage(value)}/>}/>
        </Routes>

      </div>

      <Footer/>

    </div>
  );
}

export default App;
