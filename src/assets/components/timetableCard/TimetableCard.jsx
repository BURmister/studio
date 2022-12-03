import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import ContentLoader from 'react-content-loader'
import axios from "axios";

import './TimetableCard.scss'
import logo from '../../img/logo.png'


const TimetableCard = ({ id, time }) => {

   const [course, setCourse] = React.useState()
   const [loading, setLoading] = React.useState(true)

   React.useEffect(() => {
      const fetchData = async () => {
         setLoading(true)
         try {
            const { data } = await axios.get(`http://localhost:4200/api/courses/${id}`)
            setCourse(data)
         } catch(error) {
            console.log(error)
            alert('не удалось получить курсы')
         } finally {
            setLoading(false)
         }
      }
      fetchData()

   }, [id])

   if(loading) {
      return (                
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
      )
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