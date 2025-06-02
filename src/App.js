// src/App.js
import { useState } from "react";
import "./App.css";
import PathFindingVisualizer from "./PathFindingVisualizer/PathFindingVisualizer";
import IntroOverlay from "./components/IntroOverlay";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="App">
      {showIntro ? (
        <>
          <div className="blurred">
            <PathFindingVisualizer />
          </div>
          <IntroOverlay onPlay={() => setShowIntro(false)} />
        </>
      ) : (
        <PathFindingVisualizer />
      )}
    </div>
  );
}

export default App;
