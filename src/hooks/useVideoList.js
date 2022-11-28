import { get, getDatabase, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
  const [loding, setLoding] = useState(true);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      // database related works
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(videoRef);

      try {
        setError(false);
        setLoding(true);

        // request firebase database
        const snapshot = await get(videoQuery);
        setLoding(false);

        if (snapshot.exists()) {
          setVideos((prevideos) => {
            return [...prevideos, Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
        setLoding(false);
        setError(true);
      }
    }

    fetchVideos();
  }, [page]);

  return {
    loding,
    error,
    videos,
    hasMore,
  };
}
