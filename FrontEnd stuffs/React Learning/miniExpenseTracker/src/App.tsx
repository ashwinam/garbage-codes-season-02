import Forms from "./components/Forms";
import Display from "./components/Display";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";

const App = () => {
  const { register, handleSubmit, formState } = useForm();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aa", amount: 10, category: "Groceries" },
    { id: 2, description: "bb", amount: 10, category: "Groceries" },
    { id: 3, description: "cc", amount: 10, category: "Groceries" },
    { id: 4, description: "dd", amount: 10, category: "Groceries" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div className="container my-5">
      <Forms
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
      />
      <div className="my-3">
        <ExpenseFilter
          onSelectedCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <Display
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
};

export default App;
