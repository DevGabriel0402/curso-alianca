import styled from "styled-components";

const corPrimaria = "#762626";

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
  width: 100%;
  max-width: 1140px;
  min-height: calc(100dvh - 100px);
  justify-content: center;
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const MainVideoWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const VideoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  margin-bottom: 1rem;
  color: ${corPrimaria};
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
  font-size: 1rem;
  width: 100%;
  text-align: start;
`;

export const SidebarWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 550px;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: transparent;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
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

  .lock-icon {
    position: absolute;
    top: 25px;
    left: 35px;
    background: rgba(22, 19, 19, 0.6);
    padding: 4px 6px;
    border-radius: 4px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;

    @media (max-width: 768px) {
      top: 0;
      left: 0;
      text-align: calc(center + 10px);
      background: rgba(22, 19, 19, 0.3);
      width: 100%;
      height: 100%;
      font-size: 2.5rem;
    }
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
  position: relative;

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
