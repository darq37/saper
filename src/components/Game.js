import './game.css'
import GameInfo from "./GameInfo";
import GameBoard from "./GameBoard";
import { useState } from "react";


export const rows = 10;
export const columns = 20;
export const tileLength = 25;

export const BOMBS_AMOUNT = 30;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const placeBombs = (board) => {
  let bombs = BOMBS_AMOUNT;
  while (bombs !== 0) {
	const randomRow = getRandomInt(rows);
	const randomColumn = getRandomInt(columns);
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
	  board[row][column] = {
		flag: false,
		row: row,
		clicked: false,
		adjBombs: 0,
		column: column,
		bomb: false,
		question: false,
		gameOver: false
	  };
	}
  }
  return placeBombs(board);
}

function isValidPos(row, column, n, m) {
  if (row < 0 || column < 0 || row > n - 1 || column > m - 1) {
	return 0;
  }
  return 1;
}

// Function that returns all adjacent elements
function getAdjacent(arr, i, j) {
  // Size of given 2d array
  let n = arr.length;
  let m = arr[0].length;
  
  // Initialising a vector array
  // where adjacent element will be stored
  let v = [];
  
  // Checking for all the possible adjacent positions
  if (isValidPos(i - 1, j - 1, n, m)) {
	v.push(arr[i - 1][j - 1]);
  }
  if (isValidPos(i - 1, j, n, m)) {
	v.push(arr[i - 1][j]);
  }
  if (isValidPos(i - 1, j + 1, n, m)) {
	v.push(arr[i - 1][j + 1]);
  }
  if (isValidPos(i, j - 1, n, m)) {
	v.push(arr[i][j - 1]);
  }
  if (isValidPos(i, j + 1, n, m)) {
	v.push(arr[i][j + 1]);
  }
  if (isValidPos(i + 1, j - 1, n, m)) {
	v.push(arr[i + 1][j - 1]);
  }
  if (isValidPos(i + 1, j, n, m)) {
	v.push(arr[i + 1][j]);
  }
  if (isValidPos(i + 1, j + 1, n, m)) {
	v.push(arr[i + 1][j + 1]);
  }
  
  // Returning the vector
  return v;
}


const Game = () => {
  const [board, setBoard] = useState(() => getBoard());
  const [flags, setFlags] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(0);
  
  const resetGame = () => {
	setBoard(() => getBoard());
	setTime(0);
	setPlaying(false);
	setFlags(0);
	setGameOver(false);
  }
  const setTileState = (val) => {
	let copy = [...board];
	copy[val.row][val.column] = val;
	setBoard(copy);
  }
  const setFlag = (tile) => {
	if (!tile.flag && !tile.question) {
	  setTileState({ ...tile, flag: true });
	  setFlags(prevState => prevState + 1);
	}
	if (tile.flag && !tile.question) {
	  setTileState({ ...tile, flag: false, question: true });
	  setFlags(prevState => prevState - 1);
	}
	if (!tile.flag && tile.question) {
	  setTileState({ ...tile, flag: false, question: false });
	}
  }
  const checkBomb = (tile) => {
	setPlaying(true);
	if (tile.bomb) {
	  setGameOver(true);
	  return;
	}
	let ans = getAdjacent(board, tile.row, tile.column);
	const sum = ans.reduce(
	  (accumulator, currentValue) => accumulator + currentValue.bomb,
	  0,
	);
	
	setTileState({ ...tile, clicked: true, adjBombs: sum });
  }
  
  return <div className="game-container">
	
	<GameInfo resetGame={ resetGame } flagsAmount={ flags } playing={ playing } setTime={ setTime } time={ time }
			  gameOver={ gameOver }/>
	<GameBoard board={ board } checkBomb={ checkBomb } setFlag={ setFlag } gameOver={ gameOver }/>
  </div>
}
export default Game;
