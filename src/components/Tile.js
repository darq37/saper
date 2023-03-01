import { tileLength } from "./Game";

const Tile = ({ tileState, checkBomb, setFlag }) => {
  return <button
	style={ { height: tileLength, width: tileLength } }
	onClick={ () => {
	  checkBomb(tileState)
	} }
	onContextMenuCapture={ (e) => {
	  e.preventDefault();
	  setFlag(tileState);
	} }
  >
	{ tileState?.clicked ? tileState?.value : "" }
	{ tileState?.bomb ? "*" : "" }
  </button>
}
export default Tile;
