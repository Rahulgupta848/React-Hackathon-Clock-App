import { useEffect, useState } from "react";
import App from "./App";

function Clockwatch() {
     const [tick, setTick] = useState(0);
     useEffect(()=>{
         const interval=setInterval(() => {
               setTick(tick=>tick+1)
          }, 1000)
     },[])
     

     return (
          <div>
               <App clock={tick}></App>
          </div>
     )
}

export default Clockwatch;