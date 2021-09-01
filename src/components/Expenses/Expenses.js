import './Expenses.css';
import { ExpenseItem } from './ExpenseItem';
import { Card } from '../UI/Card';
import { ExpenseFilter } from './ExpenseFilter';
import React, { useState } from 'react';
import { ExpensesList } from './ExpensesList';

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
      <ExpensesList items={filteredExpenses} />
      {/* {expenseContent} */}
    </Card>
  );
};
