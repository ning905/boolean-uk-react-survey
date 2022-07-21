import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [answersList, setAnswersList] = useState([]);
  const [answerToEdit, setAnswerToEdit] = useState([]);
  const [answerID, setAnswerID] = useState(0);
  console.log("All answers: ", answersList);

  function updateAnswersList(newAnswer) {
    let newAnswerList = [...answersList, newAnswer];

    if (newAnswer.hasOwnProperty("id")) {
      const match = answersList.find((answer) => answer.id === newAnswer.id);

      if (match) {
        newAnswerList = answersList.map((answer) =>
          answer.id === newAnswer.id ? newAnswer : answer
        );
      }
    } else {
      newAnswer.id = answerID;
      setAnswerID(answerID + 1);
    }

    setAnswersList(newAnswerList);
  }

  function editAnswer(answer) {
    setAnswerToEdit([answer]);
  }

  function deleteAnswer(answerToDelete) {
    const newAnswerList = answersList.filter(
      (answer) => answer.id !== answerToDelete.id
    );

    setAnswersList(newAnswerList);
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList
          answersList={answersList}
          editAnswer={editAnswer}
          deleteAnswer={deleteAnswer}
        />
      </section>
      <section className="main__form">
        <Form
          updateAnswersList={updateAnswersList}
          answerToEdit={answerToEdit}
          setAnswerToEdit={setAnswerToEdit}
        />
      </section>
    </main>
  );
}

export default Main;
