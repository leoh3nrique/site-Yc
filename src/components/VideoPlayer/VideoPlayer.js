import { useState } from "react";

const VideoPlayer = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      {!isPlaying ? (
        <button onClick={handlePlayVideo}>
          <img src="./images/iconPlay.png" />
        </button>
      ) : (
        <iframe
          width="600"
          height="340"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;
