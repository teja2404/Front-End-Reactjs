import quizComplete from "../assets/quiz-complete.png";

import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((anwser) => anwser === null);
  const correctAnwsers = userAnswers.filter(
    (anwser, index) => anwser === QUESTIONS[index].answers[0]
  );
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnwsers.length / userAnswers.length) * 100
  );

  const wrongAnswerShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizComplete} alt="quiz-complete" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">answered incorectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((anwser, index) => {
          let cssClass = "user-answer";

          if (anwser === null) {
            cssClass = " skipped";
          } else if (anwser === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{anwser ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
