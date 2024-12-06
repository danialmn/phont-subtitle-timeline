/* eslint-disable react/prop-types */
import '../App.css';

const Timeline = ({ currentTime, totalDuration, onTimelineClick }) => {
  const progressPercentage = (currentTime / totalDuration) * 100;

  return (
    <div 
      className="timeline"
      onClick={onTimelineClick}
    >
      <div
        className="timeline-bar"
        style={{ width: `${progressPercentage}%` }}
      />
      <div 
        className="timeline-marker" 
        style={{ left: `${progressPercentage}%` }}
      />
      <div className="time-indicators">
        <span>00:00</span>
        <span>{totalDuration.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Timeline;
