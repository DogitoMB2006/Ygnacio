import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from 'react-icons/fa';
import defaultVideo from '../assets/showcase.mp4'; // Video por defecto

const CustomVideoPlayer = ({ videoSrc = defaultVideo }) => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [showControls, setShowControls] = useState(true);
  const [hideControlsTimeout, setHideControlsTimeout] = useState(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const updateProgress = () => {
    const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(percentage);
  };

  const skipTo = (e) => {
    const skipToTime = (e.nativeEvent.offsetX / progressRef.current.offsetWidth) * videoRef.current.duration;
    videoRef.current.currentTime = skipToTime;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (hideControlsTimeout) {
      clearTimeout(hideControlsTimeout);
    }
    const timeout = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
    setHideControlsTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (hideControlsTimeout) clearTimeout(hideControlsTimeout);
    };
  }, [hideControlsTimeout]);

  return (
    <div
      className="relative w-full aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-300 bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        src={videoSrc}
        onClick={togglePlay}
        onTimeUpdate={updateProgress}
        onEnded={() => setIsPlaying(false)}
        muted={isMuted}
        loop
        playsInline
      />

      {/* Botón central de Play (solo cuando está pausado) */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
        >
          <FaPlay className="text-white text-5xl sm:text-6xl md:text-7xl" />
        </button>
      )}

      {/* Controles de reproducción */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div
          ref={progressRef}
          className="h-2 bg-gray-600 rounded-full mb-3 sm:mb-4 cursor-pointer relative"
          onClick={skipTo}
        >
          <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-full" style={{ width: `${progress}%` }} />
          <div
            className="absolute top-0 h-4 w-4 bg-white rounded-full -mt-1 shadow-md transform transition-transform hover:scale-125"
            style={{ left: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={togglePlay} className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <div className="flex items-center">
              <button onClick={toggleMute} className="p-2 text-white">
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 sm:w-28 h-2"
              />
            </div>
          </div>

          <button onClick={toggleFullScreen} className="p-2 text-white">
            <FaExpand />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
