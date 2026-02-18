import Expenses from "./components/Expenses";

const App = () => {
  const expenses = [
    {
      date: new Date(2024, 0, 19),
      title: "New Book",
      price: 39.99,
    },
    {
      date: new Date(2024, 0, 19),
      title: "New jeans",
      price: 99.99,
    },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
