import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebaseApp } from "./db/Index";

import Header from "./components/Header";
import Content from "./components/Content";
import { Footer } from "./components/Footer";
import { Loading } from "./components/Loading";

const db = getFirestore(firebaseApp);

function App() {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      const videoCollectionRef = collection(db, "videos");
      const dados = await getDocs(videoCollectionRef);
      const lista = dados.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setVideoList(lista);
      setSelectedVideo(lista[0]);
    };

    getVideos();
  }, []);

  if (!selectedVideo) return <Loading />;

  return (
    <>
      <Header />
      <Content videos={videoList} selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
      <Footer />
    </>
  );
}

export default App;
