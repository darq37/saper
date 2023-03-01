import './game.css'
import GameInfo from "./GameInfo";
import GameBoard from "./GameBoard";
import { useState } from "react";


export const rows = 10;
export const columns = 20;
export const tileLength = 25;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const placeBombs = (board) => {
  let bombs = 10;
  while (bombs !== 0) {
	const randomRow = getRandomInt(rows);
	const randomColumn = getRandomInt(columns);
	console.log(`Bomb should be at [${ randomRow }][${ randomColumn }]`)
	board[randomRow][randomColumn].bomb = true;
	bombs--;
  }
  return board;
}
const getBoard = () => {
  let board = new Array(10);
  for (let row = 0; row < rows; row++) {
	board[row] = [];
	for (let column = 0; column < columns; column++) {
	  board[row][column] = { value: 0, clicked: false, row: row, column: column, bomb: false };
	}
  }
  return placeBombs(board);
}


const Game = () => {
  const [board, setBoard] = useState(() => getBoard());
  const resetGame = () => {
	setBoard(() => getBoard());
  }
  const setTileState = (val) => {
	console.log(val);
	let copy = [...board];
	copy[val.row][val.column] = val;
	setBoard(copy);
  }
  const setFlag = (tile) => {
	setTileState({ ...tile, clicked: false, value: 0 });
  }
  const checkBomb = (tile) => {
	setTileState({ ...tile, clicked: true, value: 1 });
  }
  
  return <div className="game-container">
	
	<GameInfo resetGame={ resetGame }/>
	<GameBoard board={ board } checkBomb={ checkBomb } setFlag={ setFlag }/>
  </div>
}
export default Game;
