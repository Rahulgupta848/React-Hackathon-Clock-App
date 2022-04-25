import './Stopwatch.css'
import { useEffect, useState } from 'react';
function Stopwatch(props) {
     const [toggle, setToggle] = useState(false);
     // for stopwatch


     useEffect(() => {

          if (toggle === true) {
               props.startTimer();
          }
          else {
               props.stopTimer();
          }
     }, [toggle])

     function res(){
          props.resetTimer();
          setToggle(false);
     }
     return (
          <div className="stopwatch">
               <div>
                    <h1 className='stopwatchheading'>Stop Watch</h1>
               </div>
               <div className='reset'>
                    <button className='resetbtn' onClick={res}>Reset</button>
               </div>
               <div className='watch'>
                    <div className='stopwatchtimer'>
                         {("0"+Math.floor((props.stopWatchTick/3600)%60)).slice(-2)}
                         :{("0"+Math.floor((props.stopWatchTick/60)%60)).slice(-2)}
                         :{props.stopWatchTick%60 < 10 ? <span>0{props.stopWatchTick%60}</span> : <span>{props.stopWatchTick%60}</span>}
                    </div>



                    <div><button className='startbtn' onClick={() => {
                         setToggle((toggle) => !toggle)
                    }}>{toggle ? <span>Stop</span> : <span>Start</span>}</button></div>
               </div>
          </div>

     )
}

export default Stopwatch;