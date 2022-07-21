import { useEffect, useState } from "react";
import CheckboxGroup from "./CheckboxGroup";
import RadioBtnGroup from "./RadioBtnGroup";

let initialData = {
  color: "",
  spendTime: [],
  review: "",
  username: "",
  email: "",
};

export default function Form({ updateAnswersList, answerToEdit }) {
  const [userAnswer, setUserAnswer] = useState(initialData);

  useEffect(() => {
    if (answerToEdit.length > 0) {
      setUserAnswer(answerToEdit[0]);
    }
  }, [answerToEdit]);

  function handleInput(e) {
    const { name, type } = e.target;
    let value = e.target.value;

    if (type === "checkbox") {
      if (userAnswer.spendTime.includes("noTime") || value === "noTime") {
        value = [value];
      } else {
        value = [...userAnswer.spendTime, value];
      }
    }

    setUserAnswer({ ...userAnswer, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateAnswersList(userAnswer);
    setUserAnswer(initialData);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioBtnGroup handleInput={handleInput} color={userAnswer.color} />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <CheckboxGroup
          handleInput={handleInput}
          spendTime={userAnswer["spendTime"]}
        />
      </div>

      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={userAnswer.review}
          onChange={handleInput}
        ></textarea>
      </label>

      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={userAnswer.username}
          onChange={handleInput}
        />
      </label>

      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={userAnswer.email}
          onChange={handleInput}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
