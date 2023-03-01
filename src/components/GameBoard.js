import Tile from "./Tile";
import { columns, rows, tileLength } from "./Game";


const GameBoard = ({ board, checkBomb, setFlag }) => {
  
  return <div className="game-board" style={
	{
	  height: rows * tileLength + 20,
	  width: columns * tileLength
	}
  }>
	{ board.map((row) => row.map((column) =>
	  <Tile tileState={ column } checkBomb={ checkBomb }
			setFlag={setFlag}
			key={ `${ column.row }${ column.column }` }/>))
	}
  </div>
}
export default GameBoard;
