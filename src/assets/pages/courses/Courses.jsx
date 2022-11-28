import React from "react";
import CourseCard from "../../components/courseCard/CourseCard";

import logo from '../../img/logo.png'

import course1 from '../../img/course1.png'
import course2 from '../../img/course2.png'
import course3 from '../../img/course3.png'
import course4 from '../../img/course4.png'
import course5 from '../../img/course5.png'
import course6 from '../../img/course6.png'
import course7 from '../../img/course7.png'
import course8 from '../../img/course8.png'
import course9 from '../../img/course9.png'
import course10 from '../../img/course10.png'

const Courses = ({setCurrentPage}) => {

   const [coursesList, setCoursesList] = React.useState([
      {id: '1', name: 'название js', img: course1, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '+100500'},
      {id: '2', name: 'название php', img: course2, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '+100500'},
      {id: '3', name: 'название ts', img: course3, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '+100500'},
      {id: '4', name: 'название react', img: course4, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '+100500'},
      {id: '5', name: 'название vue', img: course5, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '+100500'},
      {id: '6', name: 'название next', img: course6, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '+100500'},
      {id: '7', name: 'название native', img: course7, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' ,  price: '+100500'},
      {id: '8', name: 'название js', img: course8, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '+100500'},
      {id: '9', name: 'название php', img: course9, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '+100500'},
      {id: '10', name: 'название ts', img: course10, description: 'хз, что написать, поэтому просто оставлю этот текст здесь для иллюзии присутствия чего-то осмусленного', lasting: '72 часа' , price: '+100500'},   
   ])

   React.useEffect(() => {
      window.scrollTo(0, 0)
      setCurrentPage('courses')
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
                     name={object.name}
                     img={object.img}
                     description={object.description}
                     lasting={object.lasting}
                     price={object.price}
                  />
               ))
            }

         </div>

      </div>
   )
}


export default Courses