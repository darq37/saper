import { tileLength } from "./Game";

const Tile = ({ tileState, checkBomb, setFlag, gameOver, onMouseDown }) => {
  return <button
	style={ { height: tileLength, width: tileLength } }
	onClick={ () => {
	  checkBomb(tileState)
	} }
	onContextMenuCapture={ (e) => {
	  e.preventDefault();
	  setFlag(tileState);
	} }
	onMouseDown={() => onMouseDown(true)}
	onMouseOut={() => onMouseDown(false)}
	onMouseUp={() => onMouseDown(false)}
  >
	{ tileState?.flag ? "F" : "" }
	{ tileState?.question ? "?" : "" }
	{ gameOver && tileState?.bomb ? "*" : "" }
	{ tileState?.clicked ? tileState.adjBombs : "" }
  </button>
}
export default Tile;
