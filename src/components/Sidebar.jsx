import { SidebarWrapper, VideoItem, Thumbnail, VideoInfo } from "@/styles/StyledComponents";

const Sidebar = ({ videos, selectedVideo, setSelectedVideo }) => (
  <SidebarWrapper>
    {videos.map((video) => (
      <VideoItem key={video.id} isSelected={video.id === selectedVideo.id} onClick={() => setSelectedVideo(video)}>
        <Thumbnail src={video.thumbnail} alt={video.title} />
        <VideoInfo>
          <h3>
            {video.id}. {video.title}
          </h3>
          <p>{video.description}</p>
        </VideoInfo>
      </VideoItem>
    ))}
  </SidebarWrapper>
);

export default Sidebar;
