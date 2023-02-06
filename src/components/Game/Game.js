import './game.css'
import GameInfo from "../GameInfo/GameInfo";
import GameBoard from "../GameBoard/GameBoard";

const Game = () => {
  return <div className="game-container">
	<GameInfo/>
	<GameBoard/>
  </div>
}
export default Game;
