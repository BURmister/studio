import React from "react"
import { Link } from "react-router-dom";

import './CourseCard.scss'
import logo from '../../img/logo.png'

const CourseCard = () => {

   return (
      <div className="card">
         <div className="card__name"><h4>Веб-разработчик на Python</h4><img src={logo} width="200px"/></div>
         <div className="card__description">
            <div>Этот курс подходит для новичков, на нем вы научитесь разрабатывать веб-приложения на Python</div>
            <span>Длительность 72 часа</span>
            <div className="card__price">
               5999 ₽
               <Link to="/" className="card__price-button">Подробнее</Link>
            </div> 
         </div> 
      </div>
   )
}


export default CourseCard