import React from "react";
import axios from "axios";
import ContentLoader from 'react-content-loader'
import { useNavigate } from "react-router";

import CourseCard from "../../components/courseCard/CourseCard";

const Courses = ({setCurrentPage}) => {

   const [coursesList, setCoursesList] = React.useState([])
   const [loading, setLoading] = React.useState(true)

   const navigate = useNavigate()

   React.useEffect(() => {
      window.scrollTo(0, 0)
      setCurrentPage('courses')

      const fetchData = async () => {
         setLoading(true)
         try {
            const { data } = await axios.get('http://localhost:4200/api/courses')
            setCoursesList(data)
         } catch(error) {
            console.log(error)
            alert('не удалось получить данные о курсах, попробуйте позже')
            navigate('/')
         } finally {
            setLoading(false)
         }  
      }
      fetchData()
   }, [])

   const loadingCards = [{}, {}, {}, {}]

   return (
      <div className="courses"> 

         <h3>наши курсы</h3>

         <div className="courses__wrapper">

            { loading ? 
               loadingCards.map((object, index) => (
                  <ContentLoader 
                  key={index}
                  speed={4}
                  width={490}
                  height={350}
                  viewBox="0 0 500 350"
                  backgroundColor="#b0aadf"
                  foregroundColor="#7b71c1"
                >
                  <rect x="0" y="0" rx="30" ry="30" width="490" height="350" />
                </ContentLoader>
               ))
            :
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