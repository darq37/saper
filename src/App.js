import './App.css';
import Game from "./components/Game";
import { DIFFICULTY_LEVEL } from "./utils";
import { useState } from "react";

function App() {
  const [level, setLevel] = useState(DIFFICULTY_LEVEL.BEGINNER);
  const setDifficultyLevel = (event) => {
	setLevel(DIFFICULTY_LEVEL[event.target.value])
  }
  return (
	<div className="App">
	  <div className="level-select">
		<label htmlFor="cars">Select difficulty level:</label>
		
		<select name="cars" id="cars" onChange={ setDifficultyLevel }>
		  <option value="BEGINNER">BEGINNER</option>
		  <option value="INTERMEDIATE">INTERMEDIATE</option>
		  <option value="ADVANCED">ADVANCED</option>
		</select>
	  </div>
	  
	  <Game level={ level || DIFFICULTY_LEVEL.BEGINNER }/>
	</div>
  );
}

export default App;
