import React from "react"

import './NewsCard.scss'

import purpleMain from '../../img/purple-main.jpg'

const NewsCard = ({ name, img, description, lasting, price }) => {

   return (
      <div className="ncard" style={
         { 
            backgroundImage: 'url(' + purpleMain + ')' 
         }
      }>
         {/* <img className="ncard__img" src={purpleMain}/> */}
         <div className="ncard__text">
            <h4>Первоклассник напарил в туалете</h4>
            Первокурсник ИСП22.Б напарил в туалете, после чего сработала пожарная сигнализация урсник 
         </div>
      </div>
   )
}


export default NewsCard