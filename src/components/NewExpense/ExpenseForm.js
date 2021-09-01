import './ExpenseForm.css';
import React, { useState } from 'react';

export const ExpenseForm = props => {
  console.log(props);
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const handlerTitleChange = e => {
    setEnteredTitle(e.target.value);
  };

  const handlerAmountChange = e => {
    setEnteredAmount(e.target.value);
  };

  const handlerDateChange = e => {
    setEnteredDate(e.target.value);
  };

  const handerSubmit = e => {
    e.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onExpenseSaveData(expenseDate);
    setEnteredDate('');
    setEnteredTitle('');
    setEnteredAmount('');
  };

  return (
    <form onSubmit={handerSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Titile</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handlerTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={handlerAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={handlerDateChange}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onStopEditingHandler}>
            Cancel
          </button>
          <button type="submit">Add to Expense</button>
        </div>
      </div>
    </form>
  );
};
