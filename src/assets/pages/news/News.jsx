import React from "react";
import NewsCard from "../../components/newsCard/NewsCard";


const News = ({setCurrentPage}) => {

   React.useEffect(() => {
      window.scrollTo(0, 0)
      setCurrentPage('news')
   }, [])

   return (
      <div className="news"> 

      <h3>новости</h3>

         <div className="news__wrapper">
         
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            
         </div>

      </div>
   )
}


export default News