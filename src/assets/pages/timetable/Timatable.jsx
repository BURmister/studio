import React from "react";
import { format, parseISO } from "date-fns"
import ruLocale from 'date-fns/locale/ru'
import axios from 'axios'

import Calendar from "../../components/calendar/Calendar";
import TimetableCard from "../../components/timetableCard/TimetableCard";


const Timetable = ({setCurrentPage}) => {

   const [selectedDate, setSelectedDate] = React.useState(new Date())
   const [dayCourses, setDayCourses] = React.useState()

   React.useEffect(() => {
      window.scrollTo(0, 0)
      setCurrentPage('timetable')

      const fetchData = async () => {
         try {
            const { data } = await axios.get(`http://localhost:4200/api/timetable/${format(selectedDate, "LLLL_d").toString().toLowerCase()}`)
            setDayCourses(data.courses)
            console.log(data.courses)
         } catch(error) {
            console.log(error)
            alert('не удалось получить курсы')
         }
      }
      fetchData()
   }, [selectedDate])

   const onDateClickHandle = (day) => {
      setSelectedDate(day)
   }


   return (
      <div className="timetable"> 

         <div className="timetable__wrapper">

            <h3>расписание</h3>

            <Calendar 
               selectedDate={selectedDate} 
               setSelectedDate={(value) => setSelectedDate(value)} 
               onDateClickHandle={(day) => onDateClickHandle(day)}
            />

            <div className="timetable__courses">
               
               {dayCourses &&
                  dayCourses
                     .map((object, index) => (
                     <div key={index}>

                        <TimetableCard
                           id={object.course_id}
                           time={object.time}
                        />

                     </div>
                  ))
               }
               
            </div>
         </div>

      </div>
   )
}


export default Timetable