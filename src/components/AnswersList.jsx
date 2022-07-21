import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  const { answersList, editAnswer } = props;

  return (
    <ul>
      {answersList.length > 0 &&
        answersList.map((answerItem, i) => (
          <AnswersItem
            answerItem={{ ...answerItem, id: i }}
            editAnswer={editAnswer}
            key={i}
          />
        ))}
    </ul>
  );
}
