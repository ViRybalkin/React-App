import './Expenses.css';
import { ExpenseItem } from './ExpenseItem';
import { Card } from '../UI/Card';
import { ExpenseFilter } from './ExpenseFilter';
import React, { useState } from 'react';

export const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const changeFilter = year => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.item.filter(item => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilter} />
      {filteredExpenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};
