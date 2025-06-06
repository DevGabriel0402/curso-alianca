import { SidebarWrapper, VideoItem, Thumbnail, VideoInfo } from "@/styles/StyledComponents";
import { FaLock } from "react-icons/fa"; // Cadeado (ícone do react-icons)

const Sidebar = ({ videos, selectedVideo, setSelectedVideo }) => {
  const today = new Date().toISOString().split("T")[0]; // Ex: '2025-05-30'

  return (
    <>
      <SidebarWrapper>
        {videos.map((video) => {
          const isReleased = today >= video.dateAula;

          return (
            <VideoItem
              key={video.id}
              isSelected={video.id === selectedVideo.id}
              onClick={() => isReleased && setSelectedVideo(video)}
              style={{
                filter: isReleased ? "none" : "grayscale(1)",
                pointerEvents: isReleased ? "auto" : "none",
                position: "relative",
              }}
            >
              <Thumbnail src={video.thumb} alt={video.title}></Thumbnail>
              {!isReleased && (
                <div className="lock-icon">
                  <FaLock />
                </div>
              )}
              <VideoInfo>
                <h3>
                  {video.idAula}. {video.title}
                </h3>
                <p>{video.description}</p>
              </VideoInfo>
            </VideoItem>
          );
        })}
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
