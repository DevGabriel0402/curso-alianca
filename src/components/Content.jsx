import { ContentWrapper } from "@/styles/StyledComponents";
import MainVideo from "./MainVideo";
import Sidebar from "./Sidebar";

const Content = ({ videos, selectedVideo, setSelectedVideo }) => (
  <ContentWrapper>
    <MainVideo selectedVideo={selectedVideo} />
    <Sidebar videos={videos} selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
  </ContentWrapper>
);

export default Content;
