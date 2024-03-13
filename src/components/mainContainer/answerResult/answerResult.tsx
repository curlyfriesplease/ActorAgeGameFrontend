import { Actor } from '../../../types/types';

export const AnswerResult = (
  currentActors: Array<Actor>,
  setCurrentScore: Function,
  setQuestionNotYetAnswered: (value: boolean) => void,
  lastAnswer: Boolean
) => {
  return (
    <div id="answer-result">
      <h2>Answer Result</h2>
      <p>{lastAnswer ? 'Correct!' : 'Wrong!'}</p>
      <button onClick={() => setQuestionNotYetAnswered(false)}>Next</button>
    </div>
  );
};
