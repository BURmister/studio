import React from "react";

import gitHub from '../../img/github-icon.svg'
import vk from '../../img/vk-icon.svg'

const Footer = () => {
   return (
      <div className='footer'>
      <div className="footer__wrapper">

        <div className="footer__wrapper-link">
          <a><img src={gitHub} width="40px" ></img></a>
          <a><img src={vk} width="60px"></img></a>
        </div>

        <div className="footer__wrapper-copyright">
          автор © 2022
        </div>

      </div>




    </div>
   )
}


export default Footer