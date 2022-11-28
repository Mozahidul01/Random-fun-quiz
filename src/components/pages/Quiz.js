/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useQuestions from "../../hooks/useQuestions";
import MiniPlayer from "../MiniPlayer";
import Options from "../Options";
import ProgressBar from "../ProgressBar";

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionsId].options[action.optionIndex].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

export default function Quiz() {
  const locatione = useLocation();
  const title = locatione.state;

  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { loding, error, questions } = useQuestions(id);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handelAnswerChange = (e, index) => {
    dispatch({
      type: "answer",
      questionsId: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  // handle when user Click The Next Buttton to get The Next Question
  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  };

  // handle when user Click The Prev Buttton to get The Previous Question
  const prevQuestion = () => {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  };

  // Calculate The Percentage Of Progress
  const parcentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  async function submit() {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, {
      state: {
        qna,
      },
    });
  }

  return (
    <>
      {loding && <div>Loding...</div>}
      {error && <div>There Was An Error!</div>}
      {!loding && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Options
            input
            options={qna[currentQuestion].options}
            handleChange={handelAnswerChange}
          />
          <ProgressBar
            prev={prevQuestion}
            next={nextQuestion}
            progress={parcentage}
            currentQuestion={currentQuestion}
            submit={submit}
          />
          <MiniPlayer id={id} title={title} />
        </>
      )}
    </>
  );
}
