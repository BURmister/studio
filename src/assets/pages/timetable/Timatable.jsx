import React from "react";
import { format, parseISO } from "date-fns"
import ruLocale from 'date-fns/locale/ru'
import axios from 'axios'
import ContentLoader from 'react-content-loader'

import Calendar from "../../components/calendar/Calendar";
import TimetableCard from "../../components/timetableCard/TimetableCard";


const Timetable = ({setCurrentPage}) => {

   const [selectedDate, setSelectedDate] = React.useState(new Date())
   const [dayCourses, setDayCourses] = React.useState()
   const [loading, setLoading] = React.useState(true)

   React.useEffect(() => {
      window.scrollTo(0, 0)
      setCurrentPage('timetable')

      const fetchData = async () => {
         setLoading(true)
         try {
            const { data } = await axios.get(`http://localhost:4200/api/timetable/${format(selectedDate, "LLLL_d").toString().toLowerCase()}`)
            setDayCourses(data.courses)
         } catch(error) {
            console.log(error)
            alert('не удалось получить курсы')
         } finally {
            setLoading(false)
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
               
               {dayCourses ? 
                  loading ?
                     <ContentLoader 
                     speed={4}
                     width={800}
                     height={330}
                     viewBox="0 0 800 330"
                     backgroundColor="#b0aadf"
                     foregroundColor="#7b71c1"
                     >
                        <rect x="0" y="26" rx="30" ry="30" width="700" height="260" />
                     </ContentLoader> 
                  :
                     dayCourses
                        .map((object, index) => (
                        <div key={index}>

                           <TimetableCard
                              id={object.course_id}
                              time={object.time}
                           />



                        </div>
                     ))

                  :

                  <div className="no-courses">
                     {format(selectedDate, "LLLL d  ----  iiii", {locale: ruLocale })} 
                     <span>курсы отсутствуют</span>
                  </div>
               }

            </div>
         </div>

      </div>
   )
}


export default Timetable