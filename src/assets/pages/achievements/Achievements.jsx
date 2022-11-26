import React from "react";


const Achievements = ({setCurrentPage}) => {

   React.useEffect(() => {
      window.scrollTo(0, 0)
      setCurrentPage('achievements')
   }, [])

   return (
      <div className="achievements"> 

      <h3>достижения</h3>

         <div className="achievements__wrapper">
         achievements
         </div>

      </div>
   )
}


export default Achievements