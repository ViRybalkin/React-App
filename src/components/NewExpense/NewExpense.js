import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (prop) => {
  console.log(prop);
  const ExpenseSaveDateHandler = (expData) => {
    const expenseData = {
      ...expData,
      id: Math.random().toString(),
    };
    prop.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseSaveData={ExpenseSaveDateHandler}></ExpenseForm>
    </div>
  );
};
