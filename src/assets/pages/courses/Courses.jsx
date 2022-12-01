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
      {id: '1', name: 'аналитик данных', img: course8, description: 'Научитесь анализировать данные с помощью сервисов аналитики и BI-инструментов, освоите Python и SQL. Станете незаменимым специалистом — и сможете помогать бизнесу принимать решения на основе данных', lasting: '72 часа' , price: '6000'},
      {id: '2', name: 'Frontend-разработчик', img: course2, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствияо-то осмусленного', lasting: '72 часа' , price: '7000'},
      {id: '3', name: 'IT-managment', img: course3, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '10500'},
      {id: '4', name: 'разработка интерфейсов', img: course4, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '9000'},
      {id: '5', name: 'Unity-разработчик', img: course7, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' ,  price: '4500'},
      {id: '6', name: 'бизнес логика', img: course1, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '20000'},
      {id: '7', name: 'системная аналитика', img: course9, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '6700'},
      {id: '8', name: 'UX-разработка', img: course10, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '8900'},   
      {id: '9', name: 'java-разработчик', img: course11, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '10500'},   
      {id: '10', name: 'разработка на python', img: course12, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '7500'},   
   ])

   React.useEffect(() => {
      window.scrollTo(0, 0)
      setCurrentPage('courses')

      // const fetchData = async () => {
      //    try {
      //     const { data } = await axios.get('http://localhost:4200/api/courses')
      //     setCoursesList(data)
      //   } catch(error) {
      //     console.log(error)
      //   }
      // }
      // fetchData()
   }, [])

   return (
      <div className="courses"> 

         <h3>наши курсы</h3>

         <div className="courses__wrapper">

            {
               coursesList.map(object => (
                  <CourseCard 
                     key={object.id}
                     id={object.id}
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