import React from "react"
import { useParams, useNavigate } from 'react-router-dom'

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

            <h3>{product.name}</h3>

            CoursePage {id}
            
         </div>

      </div>
   )
}


export default CoursePage