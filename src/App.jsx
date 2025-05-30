import { useState } from "react";
import { Videos } from "./Videos";
import Header from "./components/Header";
import Content from "./components/Content";

import { Footer } from "./components/Footer";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(Videos[0]);

  return (
    <>
      <Header />
      <Content videos={Videos} selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
      <Footer />
    </>
  );
}

export default App;
