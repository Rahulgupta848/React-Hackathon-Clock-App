import './App.css';
import Clock from './clock/Clock';
import Stopwatch from './stopwatch/Stopwatch';
import { useEffect, useState } from 'react';
function App(props) {
  const [turn, setTurn] = useState(true);// for switiching clock and stopwatch.
  const [isActive, setIsActive] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(()=>{
    if(isActive===true ){
      setTimer((timer)=>timer+1);
    }

  },[props.clock])

function start(){
  setIsActive(true);
  setStartTimer(true);
}
function stop(){
  setStartTimer(false);
  setIsActive(false);
}
function reset(){
  setIsActive(false);
  setStartTimer(false);
  setTimer(0);
}

  return (
    <div className="app">
      <div>
        {turn ? <Clock clockTick={props.clock}></Clock>
          : <Stopwatch stopWatchTick={timer}
              startTimer={start}
              stopTimer={stop}
              resetTimer={reset}
             
          ></Stopwatch>}
      </div>
      <div className='buttons'>
        <button className={turn ? "color " : "btn"} onClick={() => { setTurn(true) }}>Clock</button>
        <button className={turn ? "btn" : " color"} onClick={() => { setTurn(false) }}>Stop Watch</button>
      </div>
    </div>
  );
}


export default App;
