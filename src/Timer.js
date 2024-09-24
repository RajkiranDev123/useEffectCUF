import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [reset, setReset] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
      console.log("timer is running...");
    }, 3000);

    //run this clean up when showTimer value is false or true (when  unmounted)
    //when also showTimer is true it will first run cleanup and then setInterval is run but not on mounting
    return ()=> {
      console.log("cleanup called");
      clearInterval(intervalId);
      setSeconds(0);
    };
  }, [reset]);

  return (
    <>
    <div>Seconds : {seconds}s</div>
    <button onClick={()=>setReset(!reset)}>Reset</button>
    {/* when you call this button useEffect will re-render and first clean up will run and then setInterval is run*/}
    
    </>
  )
}

export default Timer;
