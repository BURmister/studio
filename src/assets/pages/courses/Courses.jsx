import React from "react";
import CourseCard from "../../components/courseCard/CourseCard";

import logo from '../../img/logo.png'

const Courses = ({setCurrentPage}) => {

   React.useEffect(() => {
      window.scrollTo(0, 0)
      setCurrentPage('courses')
   }, [])

   return (
      <div className="courses"> 

         <h3>наши курсы</h3>

         <div className="courses__wrapper">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
         </div>

      </div>
   )
}


export default Courses