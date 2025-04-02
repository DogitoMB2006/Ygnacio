import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from 'react-icons/fa';
import showcaseVideo from '../assets/showcase.mp4';

const CustomVideoPlayer = () => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [showControls, setShowControls] = useState(true);
  const [hideControlsTimeout, setHideControlsTimeout] = useState(null);

  // Maneja la reproducción y pausa
  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Maneja el mute y unmute
  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // Actualiza la barra de progreso
  const updateProgress = () => {
    const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(percentage);
  };

  // Permite hacer clic en la barra de progreso para cambiar la posición del video
  const skipTo = (e) => {
    const skipToTime = (e.nativeEvent.offsetX / progressRef.current.offsetWidth) * videoRef.current.duration;
    videoRef.current.currentTime = skipToTime;
  };

  // Cambiar el volumen
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  // Pantalla completa
  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // Mostrar/ocultar controles automáticamente
  const handleMouseMove = () => {
    setShowControls(true);
    
    if (hideControlsTimeout) {
      clearTimeout(hideControlsTimeout);
    }
    
    const timeout = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
    
    setHideControlsTimeout(timeout);
  };

  // Limpia el timeout al desmontar
  useEffect(() => {
    return () => {
      if (hideControlsTimeout) {
        clearTimeout(hideControlsTimeout);
      }
    };
  }, [hideControlsTimeout]);

  return (
    <div
    className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-300"
    onMouseMove={handleMouseMove}
    onMouseLeave={() => isPlaying && setShowControls(false)}
  >
    <div className="relative pb-[56.25%]"> {/* relación 16:9 */}
      <video 
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-contain bg-black"
        src={showcaseVideo}
        onClick={togglePlay}
        onTimeUpdate={updateProgress}
        onEnded={() => setIsPlaying(false)}
        muted={isMuted}
        loop
      />
    </div>
  
      {/* Overlay para el título */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-4 text-white opacity-0 hover:opacity-100 transition-opacity">
        <h3 className="text-lg font-medium">Nuestro Trabajo en Acción</h3>
      </div>
      
      {/* Controles */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Progress bar */}
        <div 
          ref={progressRef}
          className="h-1 bg-gray-500 rounded-full mb-4 cursor-pointer relative"
          onClick={skipTo}
        >
          <div 
            className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
          <div 
            className="absolute top-0 h-3 w-3 bg-white rounded-full -mt-1 shadow-md transform transition-transform hover:scale-125"
            style={{ left: `${progress}%` }}
          />
        </div>
        
        {/* Button controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={togglePlay} className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition">
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
                className="w-20 h-1 bg-gray-500 rounded-full appearance-none cursor-pointer mr-2"
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