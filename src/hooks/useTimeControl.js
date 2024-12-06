import { useState, useEffect } from 'react';

const TIME_INCREMENT = 0.1;
const INTERVAL_DELAY = 100;

export const useTimeControl = (totalDuration) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            clearInterval(interval);
            setIsPlaying(false);
            return totalDuration;
          }
          return +(prev + TIME_INCREMENT).toFixed(1);
        });
      }, INTERVAL_DELAY);
    }
    return () => clearInterval(interval);
  }, [totalDuration, isPlaying]);

  return { currentTime, setCurrentTime, isPlaying, setIsPlaying };
};

export const TIME_CONSTANTS = {
  TIME_INCREMENT,
  INTERVAL_DELAY
};
