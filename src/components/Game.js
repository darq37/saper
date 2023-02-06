import './game.css'
import GameInfo from "./GameInfo";
import GameBoard from "./GameBoard";

const Game = () => {
  return <div className="game-container">
	<GameInfo/>
	<GameBoard/>
  </div>
}
export default Game;
