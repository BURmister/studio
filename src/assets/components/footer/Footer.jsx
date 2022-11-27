import React from "react";

import gitHub from '../../img/github-icon.svg'
import vk from '../../img/vk-icon.svg'
import telegram from '../../img/telegram-icon.svg'

const Footer = () => {
  return (
      <div className='footer'>
      <div className="footer__wrapper">

        <div className="footer__wrapper-link">
          <a className="icon-github icon" href="#"><img src={gitHub}  ></img></a>
          <a className="icon-vk icon" href="#"><img src={vk} ></img></a>
          <a className="icon-telegram icon" href="#"><img src={telegram} ></img></a>
        </div>

        <div className="footer__wrapper-copyright">
          web-molekule © 2022
          <span>web-molekule@gmail.com</span>
        </div>

      </div>


    </div>
  )
}


export default Footer