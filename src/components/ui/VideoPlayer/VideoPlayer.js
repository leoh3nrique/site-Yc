import { useState } from "react";

const VideoPlayer = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      <button onClick={handlePlayVideo}>
        <img src="./images/utils/iconPlay.webp" alt="assistir video" />
      </button>
    </div>
  );
};

export default VideoPlayer;
