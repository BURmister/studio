import React from "react";

const CalendarCard = ({ cloneDay, isSameDay, format, ruLocale, selectedDate, onDateClickHandle, dayName, dayNumber}) => {

   return (
      <div
         className={` cell ${ isSameDay(cloneDay, new Date())&isSameDay(cloneDay, selectedDate) ? "today-selected" : isSameDay(cloneDay, new Date()) ? "today" : isSameDay(cloneDay, selectedDate) ? "selected"  : "not-selected"}`}
         onClick={() => {
            onDateClickHandle(cloneDay);
         }}
      >
         
         <span className="day-name ">{dayName}</span>
         <span className="day-number">{dayNumber}</span>
      </div>
   )
}


export default CalendarCard