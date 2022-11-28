import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import classes from "../../styles/pages/Result.module.css";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const { id } = useParams();
  const location = useLocation();
  const { qna } = location.state;

  const { loading, error, answers } = useAnswers(id);

  const calculateScore = () => {
    let score = 0;

    answers.forEach((question, index1) => {
      const correctIndexes = [];
      const checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);

        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score += 5;
      }
    });

    return score;
  };

  const userScore = calculateScore();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}

      {answers && answers.length > 0 && (
        <div className={classes.result}>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </div>
      )}
    </>
  );
}
