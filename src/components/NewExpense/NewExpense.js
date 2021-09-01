import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

export const NewExpense = prop => {
  const [isEditing, setIsEditing] = useState(false);
  const ExpenseSaveDateHandler = expData => {
    const expenseData = {
      ...expData,
      id: Math.random().toString(),
    };
    prop.onAddExpense(expenseData);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm
          onExpenseSaveData={ExpenseSaveDateHandler}
          onStopEditingHandler={stopEditingHandler}
        ></ExpenseForm>
      )}
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
    </div>
  );
};
