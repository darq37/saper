import './game.css'
import GameInfo from "./GameInfo";
import GameBoard from "./GameBoard";
import { useCallback, useEffect, useState } from "react";
import { getBoard, getPositions, validCoordinates } from "../utils";

const Game = ({level}) => {
  const [board, setBoard] = useState([]);
  const [flags, setFlags] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const onMouseDown = (value) => {
	setIsMouseDown(value);
  }
  
  const resetGame = useCallback(
	() => {
	  setBoard(() => getBoard(level));
	  setTime(0);
	  setPlaying(false);
	  setFlags(0);
	  setGameOver(false);
	},
	[level],
  );
  useEffect(() => {
	resetGame();
  }, [level.size, resetGame]);
  
  const isWin = board.every((row) => row.every((column) => column.clicked || column.bomb))
  
  useEffect(() => {
	if (isWin){
	  alert('WIN');
	  resetGame();
	}
  }, [isWin, resetGame]);
  
  
  const setTileState = (val) => {
	let copy = [...board];
	copy[val.row][val.column] = val;
	setBoard(copy);
  }
  const setFlag = (tile) => {
	if (tile.clicked) return;
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
	if (gameOver) return;
	setPlaying(true);
	if (tile.bomb) {
	  setGameOver(true);
	  return;
	}

	const fillStack = [];
	function fillAdjacentEmptyCells(matrix, row, col) {
	  fillStack.push([row, col]);
	  
	  while(fillStack.length > 0)
	  {
		const [row, col] = fillStack.pop();
		
		if (!validCoordinates(matrix, row, col))
		  continue;
		
		if (matrix[row][col]?.bomb) {
		  continue;
		}
		
		if (matrix[row][col]?.adjBombs !==0  || matrix[row][col].clicked) {
		  matrix[row][col].clicked = true;
		  continue;
		}
		
		matrix[row][col].clicked = true;
		
		const positions = getPositions(row , col);
		positions.forEach(({ x, y }) => {
		  fillStack.push([x,y]);
		})
	  }
	}
	fillAdjacentEmptyCells(board, tile.row, tile.column);
	setTileState({ ...tile, clicked: true });
  }
  
  return <div className="game-container">
	<GameInfo resetGame={ resetGame } flagsAmount={ flags } playing={ playing } setTime={ setTime } time={ time }
			  gameOver={ gameOver } isMouseDown={ isMouseDown } bombsAmount={level.bombs}/>
	<GameBoard board={ board } checkBomb={ checkBomb } setFlag={ setFlag } gameOver={ gameOver }
			   onMouseDown={ onMouseDown }/>
  </div>
}
export default Game;
