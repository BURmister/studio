import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom";

import './TimetableCard.scss'
import logo from '../../img/logo.png'
import axios from "axios";


const TimetableCard = ({ id, time }) => {

   const [course, setCourse] = React.useState()

   React.useEffect(() => {
      const fetchData = async () => {
         try {
            const { data } = await axios.get(`http://localhost:4200/api/courses/${id}`)
            setCourse(data)
         } catch(error) {
            console.log(error)
            alert('не удалось получить курсы')
         }
      }
      fetchData()

   }, [id])

   if(!course) {
      return<h3>загрузка</h3>
   }

   return (
      <div className="tcard">
         <div className="tcard__name"><h4>{course.name}</h4><img src={course.img} width="200px"/></div>
         <div className="tcard__description">
            <div>{course.date}<br/>{time}</div>
            <span>{course.curator}</span>
            <div className="tcard__price">
               {course.price} ₽
               <Link to={`/courses/${id}`} className="tcard__price-button">Подробнее</Link>
            </div> 
         </div>       
      </div>
   )
}


export default TimetableCard