import classes from "../styles/SingleVideo.module.css";

export default function singleVideo({ title, id, noq }) {
  return (
    <div className={classes.video}>
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq}</p>
        <p>Point : {noq * 2}</p>
      </div>
    </div>
  );
}
