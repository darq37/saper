import Tile from "./Tile";


const GameBoard = () => {
  const rows = 20;
  const columns = 30;
  const tileLength= 25;
  const getBoard = () => {
	let board = new Array(10);
	for (let i = 0; i < rows; i++) {
	  board[i] = []; // Initialize inner array
	  for (let j = 0; j < columns; j++) { // i++ needs to be j++
		board[i][j] = j;
	  }
	}
	return board
  }
  
  return <div className="game-board" style={
	{
	  height: rows * tileLength,
	  width: columns * tileLength
	}
  }> {
	getBoard().map(row => row.map(column => <Tile val={ column } tileLength={tileLength}/>))
  }</div>
}
export default GameBoard;
