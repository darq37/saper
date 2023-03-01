import './game.css'
import GameInfo from "./GameInfo";
import GameBoard from "./GameBoard";
import { useState } from "react";


export const rows = 10;
export const columns = 20;
export const tileLength = 25;

const getBoard = () => {
  let board = new Array(10);
  for (let i = 0; i < rows; i++) {
	board[i] = [];
	for (let j = 0; j < columns; j++) {
	  board[i][j] = { value: 0, clicked: false, row: i, column: j };
	}
  }
  return board
}
const Game = () => {
  const [board, setBoard] = useState(() => getBoard());
  const resetGame = () => {
	setBoard(() => getBoard());
  }
  const setTileState = (val) => {
	setBoard(
	  board.map(
		(row) => row.row === val.row ?
		  row.map((column) => column.column === val.column ? {
			...column,
			val
		  } : val) : row))
	console.log(val);
  }
  
  return <div className="game-container">
	
	<GameInfo resetGame={ resetGame }/>
	<GameBoard board={ board } setTileState={ setTileState }/>
  </div>
}
export default Game;
