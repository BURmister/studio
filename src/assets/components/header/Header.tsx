import React from "react";

const Header: React.FC = () => {
   return (
      <div className="header">

      <div className="header__wrapper">

        <div className="header__wrapper-logo">
          logo
        </div>

        <div className='header__wrapper-links'>
          <a href='/' className='header-link'>
            расписание
          </a>
          <a href='/'  className='header-link'>
            наши курсы
          </a>
          <a href='/'  className='header-link'>
            достижения
          </a>
        </div>

      </div>
    
    </div>
   )
}


export default Header