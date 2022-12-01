import React from "react";
import axios from "axios";

import CourseCard from "../../components/courseCard/CourseCard";

import logo from '../../img/logo.png'

import course1 from '../../img/course1.png'
import course2 from '../../img/course2.png'
import course3 from '../../img/course3.png'
import course4 from '../../img/course4.png'
import course5 from '../../img/course5.jpg'
import course6 from '../../img/course6.jpg'
import course7 from '../../img/course7.png'
import course8 from '../../img/course8.png'
import course9 from '../../img/course9.png'
import course10 from '../../img/course10.png'
import course11 from '../../img/course11.png'
import course12 from '../../img/course12.png'

const Courses = ({setCurrentPage}) => {

   const [coursesList, setCoursesList] = React.useState([
      // {"_id": "data-analyst", name: "аналитик данных", img: course8, description: "Научитесь анализировать данные с помощью сервисов аналитики и BI-инструментов, освоите Python и SQL. Станете незаменимым специалистом — и сможете помогать бизнесу принимать решения на основе данных", lasting: "72 часа" , price: "6000", curator: "Иванов Иван Иванович"},
      // {"_id": "frontend-developer", name: "Frontend-разработчик", img: course2, description: "хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствияо-то осмусленного", lasting: "72 часа" , price: "7000", curator: "Иванов Иван Иванович"},
      // {"_id": "it-managment", name: "IT-managment", img: course3, description: "хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного", lasting: "72 часа" , price: "10500", curator: "Иванов Иван Иванович"},
      // {"_id": "ui-ux-development", name: "разработка интерфейсов", img: course4, description: "хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного", lasting: "72 часа" , price: "9000", curator: "Иванов Иван Иванович"},
      // {"_id": "unity-developer", name: "Unity-разработчик", img: course7, description: "хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного", lasting: "72 часа" ,  price: "4500", curator: "Иванов Иван Иванович"},
      // {"_id": "business-logic", name: "бизнес логика", img: course1, description: "хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного", lasting: "72 часа" , price: "20000", curator: "Иванов Иван Иванович"},
      // {"_id": "system-analytics", name: "системная аналитика", img: course9, description: "хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного", lasting: "72 часа" , price: "6700", curator: "Иванов Иван Иванович"},
      // {"_id": "ux-development", name: "UX-разработка", img: course10, description: "хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного", lasting: "72 часа" , price: "8900", curator: "Иванов Иван Иванович"},   
      // {"_id": "java-developer", name: "java-разработчик", img: course11, description: "хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного", lasting: "72 часа" , price: "10500", curator: "Иванов Иван Иванович"},   
      // {"_id": "python-developer", name: "разработка на python", img: course12, description: "хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного", lasting: "72 часа" , price: "7500", curator: "Иванов Иван Иванович"},   
   ])

   React.useEffect(() => {
      window.scrollTo(0, 0)
      setCurrentPage('courses')

      const fetchData = async () => {
         try {
          const { data } = await axios.get('http://localhost:4200/api/courses')
          setCoursesList(data)
        } catch(error) {
          console.log(error)
        }
      }
      fetchData()
   }, [])

   return (
      <div className="courses"> 

         <h3>наши курсы</h3>

         <div className="courses__wrapper">

            {
               coursesList.map(object => (
                  <CourseCard 
                     key={object._id}
                     id={object._id}
                     img={object.img}
                     description={object.description}
                     lasting={object.lasting}
                     price={object.price}
                     name={object.name}
                  />
               ))
            }

         </div>

      </div>
   )
}


export default Courses