import "./ExpenseForm.css";
import React, { useState } from "react";

export const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDare, setEnteredDate] = useState("");

  const handlerTitleChange = (e) => {
    // setEnteredTitle(e.targer.value);
    console.log(e.target.value);
  };

  const handlerAmountChange = (e) => {
    setEnteredAmount(e.targer.value);
  };

  const handlerDateChange = (e) => {
    setEnteredDate(e.targer.value);
  };

  return (
    <form className="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Titile</label>
          <input type="text" onChange={handlerTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handlerAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handlerDateChange}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add to Expense</button>
        </div>
      </div>
    </form>
  );
};
