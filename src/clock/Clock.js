import './Clock.css'
import {useEffect,useState} from 'react';
function Clock(props) {
     const [clockHour, setClockHour] = useState(0);
     const [clockMin, setClockMin] = useState(0);
     useEffect(() => {
          let date = new Date();
          let hour = date.getHours();
          let min = date.getMinutes();
          setClockHour(hour);
          setClockMin(min);


     }, [props.clockTick])


     return (
          <div className='clock'>
               <div>
                    <h1 className='clockheading'>Clock</h1>
               </div>
               <div className='timer'>
                    <div className='clocktimer'>{clockHour < 10 ? <span>0{clockHour}</span> : <span>{clockHour}</span>}
                         :{clockMin < 10 ? <span>0{clockMin}</span> : <span>{clockMin}</span>}
                         {clockHour >= 12 ? <div>PM</div> : <div>AM</div>}</div>
               </div>
          </div>
     )
}

export default Clock;