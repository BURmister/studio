import React from "react";
import { Link } from 'react-router-dom'

import logo from '../../img/logo.png'

const Header = ({currentPage}) => {

  const links = [
    {name: 'timetable', path: '/timetable', value: 'расписание'},
    {name: 'courses', path: '/courses', value: 'наши курсы'},
    {name: 'news', path: '/news', value: 'новости'}
  ]

  return (
      <div className="header">

      <div className="header__wrapper">

        <Link to="/" className="header__wrapper-logo">
          <img src={logo} width="180px"/>
          WEB-Molekule
        </Link>

        <div className='header__wrapper-links'>
          {
            links.map(object => (
              <Link key={object.name} to={object.path} className={currentPage === object.name ? 'current-page header-link' : ' header-link' }>
                <div>
                  {object.value}
                </div>
              </Link>
            ))
          }
        </div>

      </div>
    
    </div>
  )
}


export default Header