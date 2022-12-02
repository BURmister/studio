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

   const [coursesList, setCoursesList] = React.useState([])
   // const images = [
   //    {name: "course1", value: course1},
   //    {name: "course2", value: course2},
   //    {name: "course3", value: course3},
   //    {name: "course4", value: course4},
   //    {name: "course5", value: course5},
   //    {name: "course6", value: course6},
   //    {name: "course7", value: course7},
   //    {name: "course8", value: course8},
   //    {name: "course9", value: course9},
   //    {name: "course10", value: course9},
   //    {name: "course", value: course9},
   //    {name: "course9", value: course9},
   // ]

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