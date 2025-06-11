import { useState } from "react";
import GamePlay from "./Components/GamePlay";
import StartGame from "./Components/StartGame";

2
function App() {
    const [isGameStarted, setIsGameStarted] = useState(false);

    const toggleGamePlay = () => {
        setIsGameStarted((prev) => !prev);
    };

    return (
       <>
       {isGameStarted ? <GamePlay /> : <StartGame
       toggle = {toggleGamePlay} />}
       </>
    );
}
export default App;
