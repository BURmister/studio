import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom";

import './TimetableCard.scss'
import logo from '../../img/logo.png'


const TimetableCard = ({ id, name, date, time, price, image, curator }) => {

   return (
      <div className="tcard">
         <div className="tcard__name"><h4>{name}</h4><img src={logo} width="200px"/></div>
         <div className="tcard__description">
            <div>{date}<br/>{time}</div>
            <span>{curator}</span>
            <div className="tcard__price">
               {price}
               <Link to={`/courses/${id}`} className="tcard__price-button">Подробнее</Link>
            </div> 
         </div> 
      </div>
   )
}


export default TimetableCard