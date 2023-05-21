import { useEffect } from "react"

const useTitle=title=>{
   useEffect(()=>{
document.title=`${title} -A11`;
   },[title]) 
}
;
export default useTitle;