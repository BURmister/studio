import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkToText, animateScroll as scroll } from "react-scroll";

import purpleMain from '../../img/purple-main.jpg'

const Information = ({setCurrentPage}) => {

   React.useEffect(() => {
      window.scrollTo(0, 0)
      setCurrentPage('main')
   }, [])

   return (
      <div className="information"> 
         <div className="information__wrapper">

         <div className="information__wrapper-item">
            <img src={purpleMain}/>
            <h1>WEB-Molekule</h1>
            <h2>
               привет! <br/>
               давай посмотрим расписание на сегодня
               <Link to="/timetable" className="information-button button-welcome">посмотреть</Link>
            </h2>
         </div>

         <div className="information__wrapper-item">
            еще не знаком с нашимими курсами? <br/>
            пора познакомиться
            <LinkToText to="about1" spy={true} smooth={true} offset={-10} duration={500} className="information-button">ознакомиться</LinkToText>
         </div>

         <div className="information__about">

            <div className="information__about-item">
               <img id="about1" src={purpleMain}/>
               <div>
                  <h2>кто мы?</h2>
                  <span>мы</span> - <span>web-molekule</span> - <span>крутая</span> учебная организация, предоставляющая <span>амбициозные</span> и <span>полезные</span> курсы
               </div>   
               <LinkToText to="about2" spy={true} smooth={true} offset={-10} duration={500} className="information-button">далее</LinkToText>
            </div>
            <div className="information__about-item">
               <img id="about2" src={purpleMain}/>
               <div>
                  <h2>почему наши курсы?</h2>
                  <span>наши</span> курсы <span>дешевле</span>, чем на других популярных платформах, 
                  лекции проходят в <span>очном режиме</span>, постоянное контактирование с <span>кураторами</span>,
                  и конечно же <span>менторство</span> 24/7
               </div>
               <LinkToText to="about3" spy={true} smooth={true} offset={-10} duration={500} className="information-button">далее</LinkToText>
            </div>
            <div className="information__about-item">
               <img id="about3" src={purpleMain}/>
               <div>
                  <h2>почему так?</h2>
                  у <span>нас</span> нет рекламы в каждой социальной сети, наши <span>сотрудники</span> - только <span>ваши кураторы</span> и их менеджер,
                  мы <span>не покупаем отзывы</span>, не платим звездам за рекламу и не льем воду
               </div>
               <LinkToText to="about4" spy={true} smooth={true} offset={-10} duration={500} className="information-button">далее</LinkToText>
            </div>
            <div className="information__about-item">
               <img id="about4" src={purpleMain}/>
               <div>
                  <h2>кураторы?</h2>
                  <span>да</span> - на каждом курсе свой <span>куратор</span>, он - <span>специалист</span> в своей области,
                  и именно он составляет <span>лекции</span> к своему курсу
               </div>
               <LinkToText to="about5" spy={true} smooth={true} offset={-10} duration={500} className="information-button">далее</LinkToText>
            </div>
            <div className="information__about-item">
               <img id="about5" src={purpleMain}/>
               <div>
                  <h2>что в конце?</h2>
                  в <span>конце</span> вы получите <span>диплом</span> государственного стандарта, <span>поработаете</span> на нашем 
                  маркетплейсе, <span>встретитесь</span> с крутыми компаниями и <span>займетесь</span> реальными заказами 
               </div>
               <Link to="/courses" className="information-button button-welcome button-to-courses">перейти к курсам</Link>
            </div>
         </div>

         </div>
      </div>
   )
}


export default Information