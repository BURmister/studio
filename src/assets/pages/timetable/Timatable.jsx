import React from "react";
import { format, parseISO } from "date-fns"
import ruLocale from 'date-fns/locale/ru'
import axios from 'axios'

import Calendar from "../../components/calendar/Calendar";
import TimetableCard from "../../components/timetableCard/TimetableCard";


const Timetable = ({setCurrentPage}) => {

   const [selectedDate, setSelectedDate] = React.useState(new Date())
   const [dayCourses, setDayCourses] = React.useState([
      {id: '1',name: 'название js', date: 'Ноябрь 27', time: '10:00', price: '+100500', curator: 'хз'},
      {id: '2',name: 'название php', date: 'Ноябрь 26', time: '10:00', price: '+100500', curator: 'хз'},
      {id: '3',name: 'название ts', date: 'Ноябрь 25', time: '10:00', price: '+100500', curator: 'хз'},
      {id: '4',name: 'название react', date: 'Ноябрь 28', time: '10:00', price: '+100500', curator: 'хз'},
      {id: '5',name: 'название vue', date: 'Ноябрь 24', time: '10:00', price: '+100500', curator: 'хз'},
      {id: '6',name: 'название next', date: 'Декабрь 1', time: '10:00', price: '+100500', curator: 'хз'},
      {id: '7',name: 'название native', date: 'Ноябрь 28', time: '10:00', price: '+100500', curator: 'хз'},
   ])

   React.useEffect(() => {
      window.scrollTo(0, 0)
      setCurrentPage('timetable')

      // const fetchData = async () => {
      //    try {
      //       const { data } = await axios.get(`http://localhost:4200/api/timetable/${format(selectedDate, "LLLL d", {locale: ruLocale}).toString().toLowerCase()}`)
      //       setDayCourses(data)
      //    } catch(error) {
      //       console.log(error)
      //       alert('не удалось получить курсы')
      //    }
      // }
      // fetchData()
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
               
               {
                  dayCourses
                     .filter((object) => object.date.toLowerCase().includes(format(selectedDate, "LLLL d", {locale: ruLocale}).toString().toLowerCase()))
                     .map((object, index) => (
                     <div key={index}>

                        <TimetableCard
                           id={object.id}
                           name={object.name}
                           image={object.image}
                           date={object.date}
                           time={object.time}
                           price={object.price}
                           curator={object.curator}
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