import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = (selectedYear) => {
    console.log('Year data in Expenses.js', selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.expenses.map((expense) => {
        return <ExpenseItem key={expense.id} expenseData={expense}/>
      })}
    </Card>
  );
}

export default Expenses;
