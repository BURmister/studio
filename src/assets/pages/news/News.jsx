import React from "react";
import axios from "axios";
import ContentLoader from 'react-content-loader'

import NewsCard from "../../components/newsCard/NewsCard";


const News = ({setCurrentPage}) => {

   const [news, setNews] = React.useState()
   const [loading, setLoading] = React.useState(true)

   React.useEffect(() => {
      window.scrollTo(0, 0)
      setCurrentPage('news')

      const fetchData = async () => {
         setLoading(true)
         try {
            const { data } = await axios.get('http://localhost:4200/api/news')
            setNews(data)
         }
         catch(error) {
            console.log(error)
            alert('не удалось получить новости')
         } finally {
            setLoading(false)
         }
      }
      fetchData()
   }, [])

   return (
      <div className="news"> 

      <h3>новости</h3>

         <div className="news__wrapper">
            
            { loading ?
               <ContentLoader 
                 speed={4}
                 width={1000}
                 height={450}
                 viewBox="0 0 1000 450"
                 backgroundColor="#b0aadf"
                 foregroundColor="#7b71c1"
               >
                 <rect x="0" y="0" rx="30" ry="30" width="1000" height="450" />
               </ContentLoader>
            :
               news.map((object, index) => (
                  <NewsCard
                     key={index}
                     id={object.id}
                     title={object.title}
                     date={object.date}
                     img={object.img}
                  />
               ))
            }
            
         </div>

      </div>
   )
}


export default News