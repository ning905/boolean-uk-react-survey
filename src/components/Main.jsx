import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [answersList, setAnswersList] = useState([]);
  const [answerToEdit, setAnswerToEdit] = useState([]);

  function updateAnswersList(newAnswer) {
    let newAnswerList;

    if (newAnswer.hasOwnProperty("id")) {
      newAnswerList = answersList.map((answer) =>
        answer.id === newAnswer.id ? newAnswer : answer
      );
    } else {
      newAnswer.id = answersList.length;
      newAnswerList = [...answersList, newAnswer];
    }
    setAnswersList(newAnswerList);
  }

  function editAnswer(answer) {
    setAnswerToEdit([answer]);
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} editAnswer={editAnswer} />
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
