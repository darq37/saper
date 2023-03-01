import BombCounter from "./BombCounter";
import Timer from "./Timer";

const GameInfo = ({resetGame}) => {
  return (
	<div className="game-info">
	  <BombCounter/>
	  <button onClick={resetGame}>:)</button>
	  <Timer/>
	</div>
  );
}
export default GameInfo;
