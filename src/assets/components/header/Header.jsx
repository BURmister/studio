import React from "react";
import { Link } from 'react-router-dom'

import logo from '../../img/logo.png'

const Header = ({currentPage}) => {

  const links = [
    {name: 'timetable', path: '/timetable', value: 'расписание'},
    {name: 'courses', path: '/courses', value: 'наши курсы'},
    {name: 'achievements', path: '/achievements', value: 'достижения'}
  ]

  return (
      <div className="header">

      <div className="header__wrapper">

        <div className="header__wrapper-logo">
          <Link to="/"><img src={logo} width="180px"/></Link>
        </div>

        <div className='header__wrapper-links'>
          {
            links.map(object => (
              <Link key={object.name} to={object.path} className={currentPage === object.name ? 'current-page header-link' : 'header-link' }>
                {object.value}
              </Link>
            ))
          }
        </div>

      </div>
    
    </div>
  )
}


export default Header