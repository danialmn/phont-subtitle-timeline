import { useState, useMemo, useCallback } from 'react';
import '../App.css';
import subtitles from '../data/subtitle.json';
import Controls from './Controls';
import SubtitleDisplay from './SubtitleDisplay';
import Timeline from './Timeline';
import { useTimeControl } from '../hooks/useTimeControl';

const SubtitleTimeline = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const totalDuration = useMemo(() => 
    Math.max(...subtitles.map(subtitle => subtitle.end_time)),
    []
  );

  const { currentTime, setCurrentTime, isPlaying, setIsPlaying } = useTimeControl(totalDuration);

  const handleTimelineClick = useCallback((e) => {
    const timeline = e.currentTarget;
    const rect = timeline.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = +(percentage * totalDuration).toFixed(1);
    setCurrentTime(Math.min(Math.max(0, newTime), totalDuration));
    setIsPlaying(false);
  }, [totalDuration, setCurrentTime, setIsPlaying]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, [setIsPlaying]);

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev);
  }, []);

  return (
    <div className="timeline-container">
      <Controls 
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        applyAnimation={toggleAnimation}
        currentTime={currentTime}
      />
      <SubtitleDisplay 
        subtitles={subtitles}
        currentTime={currentTime}
        isAnimating={isAnimating}
      />
      <Timeline 
        currentTime={currentTime}
        totalDuration={totalDuration}
        onTimelineClick={handleTimelineClick}
      />
    </div>
  );
};

export default SubtitleTimeline;
