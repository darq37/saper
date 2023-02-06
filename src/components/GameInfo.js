import BombCounter from "./BombCounter";
import Timer from "./Timer";
import { Button } from "@mui/material";
import MoodIcon from '@mui/icons-material/Mood';

const GameInfo = () => {
  return (
	<div className="game-info">
	  <BombCounter/>
	  <Button variant="contained" onClick={ () => console.log('jebacpis') }>
		<MoodIcon color="warning"/>
	  </Button>
	  <Timer/>
	</div>
  );
}
export default GameInfo;
