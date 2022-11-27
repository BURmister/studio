import React from "react";


const News = ({setCurrentPage}) => {

   React.useEffect(() => {
      window.scrollTo(0, 0)
      setCurrentPage('news')
   }, [])

   return (
      <div className="news"> 

      <h3>новости</h3>

         <div className="news__wrapper">
         news
         </div>

      </div>
   )
}


export default News