/* eslint-disable react/prop-types */
import '../App.css';

const Controls = ({ isPlaying, togglePlayPause, applyAnimation, currentTime }) => {
  return (
    <div className="controls">
      <div className="control-item">
        <button className="play-pause-btn" onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      <div className="control-item">
        <label className="switch">
          <input
            type="checkbox"
            onChange={applyAnimation}
          />
          <span className="slider round"></span>
        </label>
        <span className="control-label">Animation</span>
      </div>
      <div className="control-item">
        <div className="time-display">
          <span className="time-label">Current Time:</span>
          <span className="time-value">{currentTime.toFixed(2)}s</span>
        </div>
      </div>
    </div>
  );
};

export default Controls;
