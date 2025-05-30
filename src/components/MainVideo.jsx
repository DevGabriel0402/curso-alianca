import { useState } from "react";
import { MainVideoWrapper, VideoTitle, VideoContainer, Description } from "@/styles/StyledComponents";
import Play from "@/assets/play.png"; // Assuming you have a play icon for the thumbnail

const MainVideo = ({ selectedVideo }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <MainVideoWrapper>
      <VideoTitle>{selectedVideo.title.toUpperCase()}</VideoTitle>
      <VideoContainer onClick={() => setShowPlayer(true)}>
        {showPlayer ? (
          <iframe
            src={selectedVideo.url}
            title={selectedVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <img className="icon-play" src={Play} alt="play icon" />
            <img src={selectedVideo.thumbnail} alt="video preview" />
          </>
        )}
      </VideoContainer>
      <Description>{selectedVideo.description}</Description>
    </MainVideoWrapper>
  );
};

export default MainVideo;
