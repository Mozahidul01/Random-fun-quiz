import classes from "../styles/Question.module.css";
import Options from "./Options";

export default function Question({ answers = [] }) {
  return answers.map((answer) => (
    <div className={classes.question} key={Math.random() * 1000}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        <h2>{answer.title}</h2>
      </div>
      <Options input={false} options={answer.options} />
    </div>
  ));
}
