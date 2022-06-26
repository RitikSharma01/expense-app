import { useState } from "react";
import "./ExpenceForm.css";
const ExpenceForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // we can also do this instead on declaring usestate separately
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //we can use this approach also
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //or this approach
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    // console.log(userInput);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // console.log(userInput);
  };
  const dateChngeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // console.log(userInput);
  };
  const sumitExpence = (event) => {
    event.preventDefault();

    const expenceData = {
      desc: enteredTitle,
      price: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenceData(expenceData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form onSubmit={sumitExpence}>
      <div className="expence__controls">
        <div className="expence__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            required
            onChange={titleChangeHandler}
          />
        </div>
        <div className="expence__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            required
            onChange={amountChangeHandler}
          />
        </div>
        <div className="expence__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            required
            onChange={dateChngeHandler}
          />
        </div>
        <div className="expence__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expence</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenceForm;
