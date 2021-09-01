import "./Expenses.css";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import { ExpenseFilter } from "./ExpenseFilter";
import React, { useState } from "react";

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const changeFilter = (year) => {
    setFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilter} />
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      ></ExpenseItem>
    </Card>
  );
};
