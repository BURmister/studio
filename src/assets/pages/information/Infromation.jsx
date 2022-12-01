import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkToText, animateScroll as scroll } from "react-scroll";

import informationMain from '../../img/information-main.png'
import information2 from '../../img/information2.png'
import information3 from '../../img/information3.png'
import information4 from '../../img/information4.png'
import information5 from '../../img/information5.png'

const Information = ({setCurrentPage}) => {

   React.useEffect(() => {
      window.scrollTo(0, 0)
      setCurrentPage('main')
   }, [])

   return (
      <div className="information"> 
         <div className="information__wrapper">

         <div className="information__wrapper-item">
            <img src={informationMain}/>
            <h1>WEB-Molekule</h1>
            <h2>
               давай посмотрим расписание на сегодня!
               <Link to="/timetable" className="information-button button-welcome">посмотреть</Link>
            </h2>
         </div>

         <div className="information__wrapper-item">
            еще не знаком с нашимими курсами? <br/>
            <LinkToText to="about1" spy={true} smooth={true} offset={-10} duration={500} className="information-button">ознакомиться</LinkToText>
         </div>

         <div className="information__about">

            <div className="information__about-item">
               <img id="about1" src={information2}/>
               <div>
                  <h2>кто мы?</h2>
                  мы - <span>web-molekule</span> - крутая <span>учебная организация</span>, предоставляющая перспективные и полезные <span>курсы</span> для вашего обучения!
               </div>   
               <LinkToText to="about2" spy={true} smooth={true} offset={-10} duration={500} className="information-button">далее</LinkToText>
            </div>
            <div className="information__about-item">
               <img id="about2" src={information3}/>
               <div>
                  <h2>почему наши курсы?</h2>
                  <span>наши</span> курсы <span>дешевле</span>, чем на других популярных платформах, 
                  лекции проходят в <span>очном формате</span>,  что обеспечивает постоянное взаимодействие с <span>кураторами!</span>
               </div>
               <LinkToText to="about3" spy={true} smooth={true} offset={-10} duration={500} className="information-button">далее</LinkToText>
            </div>
            <div className="information__about-item">
               <img id="about3" src={information4}/>
               <div>
                  <h2>менторство?</h2>
                  <span>да</span> - на каждом курсе есть свой <span>куратор</span>, <br/>он - <span>специалист</span> в своей области,
                  а, по совместительству, автор курса!  <span></span>
               </div>
               <LinkToText to="about4" spy={true} smooth={true} offset={-10} duration={500} className="information-button">далее</LinkToText>
            </div>
            <div className="information__about-item">
               <img id="about4" src={information5}/>
               <div>
                  <h2>что в конце?</h2>
                  <span>в конце</span> вы получите <span>диплом</span> государственного образца, <span>стажировку</span> на нашей 
                  площадке, <span>ознакомитесь</span> с крутыми стартапами и <span>получите  реальный опыт</span> работы с заказами! 
               </div>
               <Link to="/courses" className="information-button button-welcome button-to-courses">перейти к курсам</Link>
            </div>
         </div>

         </div>
      </div>
   )
}


export default Information