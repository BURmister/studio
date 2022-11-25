import React from "react";

const Information: React.FC = () => {
   return (
      <div className="information"> 
         <div className="information__wrapper">

         <div className="information__wrapper-item">
            привет! <br/>
            давай посмотрим расписание на сегодня
            <a href="/" className="information-link">посмотреть</a>
         </div>

         <div className="information__wrapper-item">
            не знаком с нашимими курсами? <br/>
            пора познакомиться
            <a href="/" className="information-link">посмотреть</a>
         </div>

         </div>
      </div>
   )
}


export default Information