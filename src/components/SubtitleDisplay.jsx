/* eslint-disable react/prop-types */
import '../App.css';

const SubtitleDisplay = ({ subtitles, currentTime, isAnimating }) => {
  return (
    <div className="subtitle-display">
      {subtitles.map((subtitle, index) =>
        currentTime >= subtitle.start_time && currentTime <= subtitle.end_time ? (
          <div
            key={index}
            className={`subtitle ${isAnimating ? 'animate' : ''}`}
          >
            {subtitle.subtitle}
          </div>
        ) : null
      )}
    </div>
  );
};

export default SubtitleDisplay;
