import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  const { answersList, editAnswer, deleteAnswer } = props;

  return (
    <ul>
      {answersList.length > 0 &&
        answersList.map((answerItem) => (
          <AnswersItem
            answerItem={answerItem}
            key={answerItem.id}
            editAnswer={editAnswer}
            deleteAnswer={deleteAnswer}
          />
        ))}
    </ul>
  );
}
