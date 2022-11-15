import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList() {
  const [loding, setLoding] = useState(true);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      // database related works
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(videoRef, orderByKey());

      try {
        setError(false);
        setLoding(true);

        // request firebase database
        const snapshot = await get(videoQuery);
        setLoding(false);
        console.log(Object.values(snapshot.val()));

        if (snapshot.exists()) {
          setVideos((prevideos) => {
            return [...prevideos, Object.values(snapshot.val())];
          });
        } else {
          //
        }
      } catch (error) {
        console.log(error);
        setLoding(false);
        setError(true);
      }
    }

    fetchVideos();
  }, []);

  return {
    loding,
    error,
    videos,
  };
}
