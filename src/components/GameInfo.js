import BombCounter from "./BombCounter";
import Timer from "./Timer";

const GameInfo = ({ resetGame, flagsAmount, playing, setTime, time, gameOver }) => {
  return (
	<div className="game-info">
	  <BombCounter flagsAmount={ flagsAmount }/>
	  <button onClick={ resetGame }>:)</button>
	  <Timer playing={ playing } time={ time } setTime={ setTime } gameOver={gameOver}/>
	</div>
  );
}
export default GameInfo;
