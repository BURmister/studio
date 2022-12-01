import React from "react"
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'

import './CoursePage.scss'

const CoursePage = ({setCurrentPage}) => {

   const { id } = useParams()
   const navigate = useNavigate()
   const [course, setCourse] = React.useState()

   React.useEffect(() => {
      window.scrollTo(0, 0)
      setCurrentPage('coursePage')

      const fetchData = async () => {
         try {
            const { data } = await axios.get(`http://localhost:4200/api/courses/${id}`)
            setCourse(data)
         } catch(error) {
            console.log(error)
            navigate('/courses')
         }
      }
      fetchData()
   }, [])

   if (!course) {
      return <h1>загрузка...</h1>
   }

   return (
      <div className="coursePage"> 

         <div className="coursePage__wrapper">

            <div className="wrapper__item">
            <h3>{course.name}</h3>
               <div className="img"></div>
               <div className="description">
                  <h4>О чем этот курс?</h4>
                  {course.description}
               </div>    
               <div className="list">
                  <h4>Для кого этот курс подходит?</h4>
                  Новички в программировании
                  Люди которым хотелось бы ознакомиться с айти сферой<br/>
                  Люди которые хотят восполнить недостающие знания о данной сфере
               </div>
            </div>

            <div className="wrapper__item">
               <div className="description">
                  <h4>Кто ведет этот курс?</h4>
               </div>
               <div className="curator">
                  <div className="img"></div>
                  {course.curator}<br/>
                  Преподаватель ПЭК ГГТУ, имеет такие то заслуги и такой то титул а также имеет 6 высших образований и так далее так далее
               </div>
            </div>

            <div className="wrapper__item">
               <div className="img">{course.lasting} академических часа</div>
               <div className="description">
                  <h4>Сколько длится?</h4>
               </div>
            </div>

            <div className="wrapper__item">
               <div className="description"><h4>По окончанию обучения, вы получите сертификат</h4></div>
               <div className="img"></div>
            </div>

            <div className="wrapper__item">
               <div className="description"><h4>стоимость:</h4>{course.price} ₽</div>
            </div>
            
         </div>

      </div>
   )
}


export default CoursePage