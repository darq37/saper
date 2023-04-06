function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const DIFFICULTY_LEVEL = {
  BEGINNER: { size: 10, bombs: 10, name: 'BEGINNER' },
  INTERMEDIATE: { size: 16, bombs: 40, name: 'INTERMEDIATE' },
  ADVANCED: { size: 24, bombs: 99, name: 'ADVANCED' },
}
const placeBombs = (board, bombsAmount) => {
  let bombs = bombsAmount;
  while (bombs !== 0) {
	const randomRow = getRandomInt(board.length);
	const randomColumn = getRandomInt(board.length);
	board[randomRow][randomColumn].bomb = true;
	bombs--;
  }
  return board;
}
export const getBoard = (level) => {
  let board = new Array(level.size);
  for (let row = 0; row < level.size; row++) {
	board[row] = [];
	for (let column = 0; column < level.size; column++) {
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
  const bombed = placeBombs(board, level.bombs)
  return fillAdjacent(bombed);
}

function isValidPos(row, column, arr) {
  if (row < 0 || column < 0 || row > arr.length - 1 || column > arr.length - 1) {
	return 0;
  }
  return 1;
}

export function getAdjacent(arr, i, j) {
  let adjacentValidPositions = [];
  const positions = [
	{ x: i - 1, y: j - 1 }, { x: i - 1, y: j }, { x: i - 1, y: j + 1 },
	{ x: i, y: j - 1 }, { x: i, y: j + 1 },
	{ x: i + 1, y: j - 1 }, { x: i + 1, y: j }, { x: i + 1, y: j + 1 },
  ];
  positions.forEach(({ x, y }) => {
	if (isValidPos(x, y, arr)) {
	  adjacentValidPositions.push(arr[x][y])
	}
  })
  
  return adjacentValidPositions;
}

function fillAdjacent(board) {
  let prepared = [...board];
  for (let row = 0; row < board.length; row++) {
	for (let column = 0; column < board.length; column++) {
	  let adjacent = getAdjacent(board, row, column);
	  const sum = adjacent.reduce(
		(accumulator, currentValue) => accumulator + currentValue.bomb,
		0,
	  );
	  prepared[row][column] = {
		...board[row][column],
		adjBombs: sum
	  };
	}
  }
  return prepared;
}
