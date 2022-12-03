import React from "react"

import './NewsCard.scss'

import news from '../../img/news.png'

const NewsCard = ({ id, title, date, img }) => {

   return (
      <div className="ncard" style={
         { 
            backgroundImage: 'url(' + news + ')' 
         }
      }>
         {/* <img className="ncard__img" src={purpleMain}/> */}
         <div className="ncard__text">
            <h4>{title}</h4>
         </div>
      </div>
   )
}


export default NewsCard