import './Expenses.css';
import { Card } from '../UI/Card';
import { ExpenseFilter } from './ExpenseFilter';
import React, { useState } from 'react';
import { ExpensesList } from './ExpensesList';
import { ExpenseChart } from './ExpenseChart';

export const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const changeFilter = year => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.item.filter(item => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilter} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
