import Header from "./Header";
import TodoTabs from "./TodoTabs";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Design TaskFlow component hierarchy",
      isCompleted: false,
      category: "Architecture",
    },
    {
      id: 2,
      text: "Set up Tailwind CSS responsive layout",
      isCompleted: false,
      category: "Styling",
    },
    {
      id: 3,
      text: "Initialize React project with Vite",
      isCompleted: true,
      category: "Setup",
    },
  ]);

  const handleAddItem = (newText) => {
    const newItem = {
      id: Date.now(),
      text: newText,
      isCompleted: false,
      category: "Setup",
    };
    setTodos((prevTodos) => [...prevTodos, newItem]);
  };
  return (
    <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8 space-y-6">
      <Header />
      <TodoTabs />
      <TodoInput onAddItem={handleAddItem} />
      <TodoList todos={todos} />
    </div>
  );
}
