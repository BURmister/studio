import React from "react"
import { useParams, useNavigate } from 'react-router-dom'

import './CoursePage.scss'

const CoursePage = ({setCurrentPage}) => {

   const { id } = useParams()
   const navigate = useNavigate()
   const [product, setProduct] = React.useState()

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
      setCurrentPage('coursePage')

      const currentCourse = dayCourses.find(object => object.id === id)

      if(!currentCourse) {
         navigate('/courses')
      }

   //     async function fetchProduct() {
   //         try {
   //             const { data } = await axios.get('https://6241abd3042b562927a77458.mockapi.io/goods/' + id)
   //             setProduct(data)
   //         }
   //         catch (error) {
   //             alert('product not found')
   //             navigate("/Shop")
   //         }
   //     }
   //    
   //     fetchProduct()

      setProduct(currentCourse)

   }, [])

   if (!product) {
      return <h1>загрузка...</h1>
   }

   return (
      <div className="coursePage"> 

         <div className="coursePage__wrapper">

            <div className="wrapper__item">
            <h3>{product.name}</h3>
               <div className="img"></div>
               <div className="description">
                  <h4>О чем этот курс?</h4>
                  Описание курса описание курса описание курса Опание куркурса описание курсаОписание курса описание курса описание курсаОписание курса описание курса описание курсаОписание курса описание курса описание курсаОписание курса описание курса описание курсаОписание курса описание курса описание курса
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
                  Сафронов Дмитрий Алексеевич
                  Преподаватель ПЭК ГГТУ, имеет такие то заслуги и такой то титул а также имеет 6 высших образований и так далее так далее
               </div>
            </div>

            <div className="wrapper__item">
               <div className="img">72 академических часа</div>
               <div className="description">
                  <h4>Сколько длится?</h4>
               </div>
            </div>

            <div className="wrapper__item">
               <div className="description"><h4>По окончанию обучения, вы получите сертификат</h4></div>
               <div className="img"></div>
            </div>
            
         </div>

      </div>
   )
}


export default CoursePage