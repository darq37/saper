import { useEffect } from "react";

const Timer = ({ playing, time, setTime, gameOver }) => {
  
  useEffect(() => {
	const checkTime = () => {
	  if (playing && !gameOver) {
		setTime(prevState => prevState + 1);
	  }
	  if (gameOver) {
		setTime(0);
	  }
	  
	}
	const timer = setInterval(checkTime, 1000);
	return () => clearInterval(timer)
	
	// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, gameOver]);
  
  
  return <>{ time }</>
}
export default Timer
