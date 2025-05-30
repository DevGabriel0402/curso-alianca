import styled from "styled-components";

const corPrimaria = "#AE312A";

export const HeaderWrapper = styled.header`
  background: ${corPrimaria};
  color: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 1.3rem;

  img {
    max-width: 100px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const MainVideoWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
`;

export const VideoTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  margin-bottom: 1rem;
  padding-left: 1rem;
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  margin-bottom: 1rem;

  .icon-play {
    position: absolute;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 100px !important;
    height: 100px !important;
    cursor: pointer;
    z-index: 999 !important;
  }

  iframe,
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
    cursor: pointer;
  }

  img:nth-child(2) {
    backdrop-filter: blur(5px);
  }
`;

export const Description = styled.p`
  padding-left: 1rem;
  font-size: 1rem;
  width: 100%;
  text-align: start;

  @media (max-width: 768px) {
    padding-left: 0.5rem;
  }
`;

export const SidebarWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 550px;
  overflow-y: auto;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: row;
    overflow-x: auto;
  }
`;

export const VideoItem = styled.div`
  position: relative;
  display: flex;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  background: ${({ isSelected }) => (isSelected ? "#262626" : "#fff")};
  border-left: 5px solid ${({ isSelected }) => (isSelected ? "#ae312a" : "transparent")};
  padding: 0.5rem;
  transition: 0.2s;
  color: ${({ isSelected }) => (isSelected ? "#fafafa" : "#333")};

  &:hover {
    background: ${({ disabled }) => (disabled ? "#fff" : "#262626")};
    color: ${({ disabled }) => (disabled ? "#333" : "#fafafa")};
  }

  @media (max-width: 768px) {
    background-color: #262626;
    color: #fafafa;
    padding: 0;
    border-left: none !important;
    opacity: 1;
    width: 300px;
    height: 200px;

    &:hover {
      background-color: #262626;
    }
  }
`;

export const Thumbnail = styled.img`
  width: 80px;
  height: 60px;
  object-fit: cover;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    width: 300px;
    height: 200px;
    margin-right: 0;
    aspect-ratio: 1/1;
    mask-image: linear-gradient(to bottom, #262626 0%, transparent 100%);
  }
`;

export const VideoInfo = styled.div`
  h3 {
    font-size: 0.95rem;
    margin: 0 0 0.2rem;
  }

  p {
    font-size: 0.8rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 768px) {
    position: absolute;
    bottom: 10px;
    padding: 0.5rem;

    h3 {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;
