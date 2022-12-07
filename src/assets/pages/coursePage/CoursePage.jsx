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
         <h3>{course.name}</h3>

            <div className="discription">
            <h4>О чем этот курс?</h4>
               <div className="discription-item">
                  <div>
                     <span>{course.description}</span>
                     <div>
                        курс подходит как для новичков в программировании, 
                        которые только <br/> хотят войти в IT-comunity,<br/>
                        так и для уже имеющих опыт в IT
                     </div>
                  </div>
                  <img src={course.img} width="350px"/>
               </div>
            </div>

            <div className="curator">
               <h4>Кто ведет этот курс?</h4>
               <div>
                  <img src={course.img} width="200"/>
                  <div>
                     <span>{course.curator}</span>
                     Преподаватель ПЭК ГГТУ, имеет такие то заслуги и такой то титул а также имеет 6 высших образований и так далее так далее
                  </div>
               </div>
            </div>

            <div className="lasting">
            <h4>Сколько длится?</h4>
               <div>{course.lasting}</div>
            </div>

            <div className="in-end">
               <h4>В конце обучения вы получите:</h4>
               <div>
                  - знания современного стека<br/>
                  - сертификат гос. образца<br/>
                  - реальные бизнес-проекты<br/>
                  - опыт работы на нашем маркетплейсе<br/>
                  - новые знакомтсва и возможности<br/>
               </div>
            </div>

            <div className="price">
               <h4>стоимость:</h4>
               <div>{course.price} ₽</div>
            </div>
            
         </div>

      </div>
   )
}


export default CoursePage