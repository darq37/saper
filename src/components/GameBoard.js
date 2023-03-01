import Tile from "./Tile";
import { columns, rows, tileLength } from "./Game";


const GameBoard = ({ board, setTileState }) => {
  
  return <div className="game-board" style={
	{
	  height: rows * tileLength + 20,
	  width: columns * tileLength
	}
  }>
	{ board.map((row) => row.map((column) =>
	  <Tile tileState={ column } setTileState={ setTileState }
			key={ `${ column.row }${ column.column }` }/>))
	}
  </div>
}
export default GameBoard;
