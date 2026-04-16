import React, {useState} from "react";
import "../../styles/videoplay.css";
import YouTube from "react-youtube";

const Videoplay = () => {
  const [player, setPlayer] = useState(null);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // доступ к объекту плеера (event.target) доступен здесь
    setPlayer(event.target);
  };

  const onError = (event) => {
    console.error("Возникла ошибка при воспроизведении видео:", event.data);
  };
  return (
    <div>
      <div className="video-container">
        <YouTube
          videoId="https://youtu.be/WiR-5swzlvE"
          opts={opts}
          onReady={onReady}
          onError={onError}
          className="video-play"
        />
      </div>
    </div>
  );
};

export default Videoplay;
