import { useEffect } from "react";

const Timer = ({ playing, time, setTime }) => {

  useEffect(() => {
	const checkTime = () => {
	  if (playing) {
		setTime(prevState => prevState + 1);
	  }
	  else {
		setTime(0)
	  }
	}
	const timer = setInterval(checkTime, 1000);
	return () => clearInterval(timer)
	
  }, [playing]);
  
  
  return <>{ time }</>
}
export default Timer
