import Tile from "./Tile";

const GameBoard = ({ board, checkBomb, setFlag, gameOver, onMouseDown }) => {
  
  return <div className="game-board">
	{ board.map((row, index) =>
      <div key={index} className="board-row">{ row.map((column) =>
        <Tile gameOver={ gameOver } tileState={ column } checkBomb={ checkBomb }
              setFlag={ setFlag } onMouseDown={ onMouseDown }
              key={ `${ column.row }${ column.column }` }/>) }
      </div>)
	}
  </div>
}
export default GameBoard;
