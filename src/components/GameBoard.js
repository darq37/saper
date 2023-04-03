import Tile from "./Tile";
import { columns, tileLength } from "./Game";


const GameBoard = ({ board, checkBomb, setFlag, gameOver }) => {
  
  return <div className="game-board" style={
	{
	  width: columns * tileLength
	}
  }>
	{ board.map((row) => row.map((column) =>
	  <Tile gameOver={gameOver} tileState={ column } checkBomb={ checkBomb }
			setFlag={setFlag}
			key={ `${ column.row }${ column.column }` }/>))
	}
  </div>
}
export default GameBoard;
