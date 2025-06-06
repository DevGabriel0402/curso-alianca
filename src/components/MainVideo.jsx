import { useState } from "react";
import { MainVideoWrapper, VideoTitle, VideoContainer, Description } from "@/styles/StyledComponents";
import { TbPlayerPlayFilled } from "react-icons/tb";

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
            <TbPlayerPlayFilled className="icon-play" style={{ color: "#762626" }} />
            <img src={selectedVideo.thumb} alt="video preview" />
          </>
        )}
      </VideoContainer>
      <Description>{selectedVideo.description}</Description>
    </MainVideoWrapper>
  );
};

export default MainVideo;
