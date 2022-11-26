import { useState, useEffect } from "react"
import {
format,
addDays,
getWeek,
subWeeks,
addWeeks,
startOfWeek,
isSameDay,
parseISO
} from "date-fns"
import ruLocale from 'date-fns/locale/ru'

import './Calendar.scss'
import CalendarCard from "../calendarCard/CalendarCard"

const Calendar = ({ selectedDate, onDateClickHandle }) => {
   const [currentMonth, setCurrentMonth] = useState(new Date())
   const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth))
   const [week, setWeek] = useState([])

   const changeWeekHandle = (btnType) => {
      if (btnType === "prev") {
         setCurrentMonth(subWeeks(currentMonth, 1))
         setCurrentWeek(getWeek(subWeeks(currentMonth, 1)))
      }
      if (btnType === "next") {
         setCurrentMonth(addWeeks(currentMonth, 1))
         setCurrentWeek(getWeek(addWeeks(currentMonth, 1)))
      }
   }

   const renderHeader = () => {
      const dateFormat = "LLLL yyyy"
      return (
         <span>{format(currentMonth, dateFormat, { locale: ruLocale })}</span>
      )
   }

   useEffect(() => {
      const renderDays = () => {
         const dateFormat = "EEE"
         let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 })
         const startDateDay = startOfWeek(currentMonth, { weekStartsOn: 1 })
         const dateFormatDay = "d"
         let currentWeek = []
         let day = startDateDay;
         let formattedDate = ""
   
         for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormatDay, { locale: ruLocale })
            const cloneDay = day
            currentWeek.push(
               {cloneDay: cloneDay , dayName: format(addDays(startDate, i), dateFormat, { locale: ruLocale }), dayNumber: formattedDate}
            )
            day = addDays(day, 1)
         }

         setWeek(currentWeek)
      }
      renderDays()
   }, [currentWeek])


   const renderFooter = () => {
      return (
         <div className="calendar-footer">
            <button className="calendar-button" onClick={() => changeWeekHandle("prev")}>назад</button>
            <div>{currentWeek}</div>
            <button className="calendar-button" onClick={() => changeWeekHandle("next")}>далее</button>
         </div>
      )
   }

   return (
      <div className="calendar">
         {renderHeader()}
         <div className="body-calendar">
            {
               week.map(object => (
                  <CalendarCard 
                     key={object.cloneDay}
                     cloneDay={object.cloneDay}
                     isSameDay={isSameDay} 
                     format={format}
                     ruLocale={ruLocale}
                     selectedDate={selectedDate} 
                     onDateClickHandle={onDateClickHandle}
                     dayName={object.dayName}
                     dayNumber={object.dayNumber}
                     parseISO={parseISO}
                  />
               ))
            }
         </div>
         {renderFooter()}
      </div>
   )
}

export default Calendar;