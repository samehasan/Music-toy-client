import { useEffect } from "react"

const useTitle=title=>{
   useEffect(()=>{
document.title=`${title} - MusicalToy`;
   },[title]) 
}
;
export default useTitle;