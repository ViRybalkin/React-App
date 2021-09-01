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

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilter} />
      {props.item.map(expense => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};
