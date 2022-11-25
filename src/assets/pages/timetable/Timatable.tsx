import React from "react";

const Timetable: React.FC = () => {
   return (
      <div className="timetable"> 

         <div className="timetable__wrapper">
            <div className="timetable__calendar">
               <div className="calendar-day">
                  ПН
                  <span>05</span>
               </div>
               <div className="calendar-day">
                  ВТ
                  <span>06</span>
               </div>
               <div className="calendar-day">
                  СР
                  <span>07</span>
               </div>
               <div className="calendar-day">
                  ЧТ
                  <span>08</span>
               </div>
               <div className="calendar-day">
                  ПТ
                  <span>09</span>
               </div>
               <div className="calendar-day">
                  СБ
                  <span>10</span>
               </div>
               <div className="calendar-day">
                  ВС
                  <span>11</span>
               </div>

            </div>
            <div className="timetable__curses">
               <div className="timetable__curses-card">

               </div>
            </div>
         </div>

      </div>
   )
}


export default Timetable