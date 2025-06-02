// src/components/IntroOverlay.js
import React from "react";
import "./IntroOverlay.css";

const IntroOverlay = ({ onPlay }) => {
  return (
    <div className="intro-overlay">
      <div className="overlay-content">
        <h1 className="title">🔍 Pathfinding Visualizer</h1>
        <p className="subtitle">Watch Dijkstra's Algorithm come to life!</p>

        <div className="instructions">
          <h2>📌 How to Use</h2>
          <ul>
            <li>
              🟩 <strong>Start Node:</strong> Green-colored cell
            </li>
            <li>
              🟥 <strong>End Node:</strong> Red-colored cell
            </li>
            <li>
              🧱 <strong>Obstacles:</strong> Click or drag to create walls
            </li>
            <li>
              🧭 <strong>Visualize:</strong> Click "Visualize Dijkstra" to begin
            </li>
            <li>
              🔄 <strong>Reset:</strong> Click "Clear Grid" to try again
            </li>
          </ul>
        </div>

        <button className="play-button" onClick={onPlay}>
          🚀 Let’s Begin!
        </button>
      </div>
    </div>
  );
};

export default IntroOverlay;
