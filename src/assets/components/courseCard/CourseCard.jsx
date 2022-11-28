import React from "react"
import { Link } from "react-router-dom";

import './CourseCard.scss'

const CourseCard = ({ id, name, img, description, lasting, price }) => {

   return (
      <div className="card">
         <div className="card__name"><h4>{name}</h4><img src={img} width="200px"/></div>
         <div className="card__description">
            <div>{description}</div>
            <span>Длительность {lasting}</span>
            <div className="card__price">
               {price} ₽
               <Link to={`/courses/${id}`} className="card__price-button">Подробнее</Link>
            </div> 
         </div> 
      </div>
   )
}


export default CourseCard