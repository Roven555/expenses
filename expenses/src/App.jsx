import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: "e1",
      date: new Date(2024, 0, 19),
      title: "New Book",
      amount: 39.99,
    },
    {
      id: "e2",
      date: new Date(2024, 0, 19),
      title: "New jeans",
      amount: 99.99,
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />  
    </div>
  );
};

export default App;
