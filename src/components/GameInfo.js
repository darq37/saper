import BombCounter from "./BombCounter";
import Timer from "./Timer";
import { Button } from "@mui/material";
import MoodIcon from '@mui/icons-material/Mood';

const GameInfo = ({resetGame}) => {
  return (
	<div className="game-info">
	  <BombCounter/>
	  <Button variant="contained" onClick={resetGame}>
		<MoodIcon color="warning"/>
	  </Button>
	  <Timer/>
	</div>
  );
}
export default GameInfo;
