import BombCounter from "./BombCounter";
import Timer from "./Timer";
import "./gameInfo.css";

const GameInfo = ({ resetGame, flagsAmount, playing, setTime, time, gameOver, isMouseDown, bombsAmount }) => {
  const getButtonText = () => {
	if (gameOver) {
	  return ":("
	}
	if (isMouseDown) {
	  return ":O"
	}
	return ":)"
  }
  return (
	<div className="game-info">
	  <BombCounter flagsAmount={ flagsAmount } bombsAmount={ bombsAmount }/>
	  <button onClick={ resetGame } className="face-button">{ getButtonText() }</button>
	  <Timer playing={ playing } time={ time } setTime={ setTime } gameOver={ gameOver }/>
	</div>
  );
}
export default GameInfo;
