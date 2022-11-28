import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import classes from "../styles/Videos.module.css";
import SingleVideo from "./SingleVideo";

export default function videos() {
  const { loding, error, videos } = useVideoList();

  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos[0].map((video) =>
          video.noq > 0 ? (
            <Link
              to={`/quiz/${video.youtubeID}`}
              state={video.title}
              key={video.youtubeID}
            >
              <SingleVideo
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
              />
            </Link>
          ) : (
            <SingleVideo
              title={video.title}
              id={video.youtubeID}
              noq={video.noq}
              key={video.youtubeID}
            />
          )
        )}
      {!loding && videos.length === 0 && (
        <div className="warning">No data found!</div>
      )}
      {error && <div className="error">There was an Error</div>}
      {loding && <div>Loading...</div>}
    </div>
  );
}
