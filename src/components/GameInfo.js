import BombCounter from "./BombCounter";
import Timer from "./Timer";

const GameInfo = ({ resetGame, flagsAmount }) => {
  return (
	<div className="game-info">
	  <BombCounter flagsAmount={ flagsAmount }/>
	  <button onClick={ resetGame }>:)</button>
	  <Timer/>
	</div>
  );
}
export default GameInfo;
