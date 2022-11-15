import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import classes from "../styles/Videos.module.css";
import SingleVideo from "./SingleVideo";

export default function videos() {
  const { loding, error, videos } = useVideoList([]);
  const videoList = videos[0];
  // console.log(videos);
  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videoList.map((video) => (
          <Link to="/quiz" key={video.youtubeID}>
            <SingleVideo
              title={video.title}
              id={video.youtubeID}
              noq={video.noq}
            />
          </Link>
        ))}
      {!loding && videoList.length === 0 && (
        <div className="warning">No data found!</div>
      )}
      {error && <div className="error">There was an Error</div>}
      {loding && <div>Loading...</div>}
    </div>
  );
}
