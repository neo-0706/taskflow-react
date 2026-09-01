import Header from "./Header";
import TodoTabs from "./TodoTabs";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";

export default function TodoApp() {
  const [activeFilter, setActiveFilter] = useState("all");
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

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      }),
    );
  };

  const handleFilterChange  = (status) => setActiveFilter(status);
  
  const activeTasks = todos.filter((todo) => !todo.isCompleted);
  const completedTasks = todos.filter((todo) => todo.isCompleted);

  let filteredTodos = todos;

  if (activeFilter === "active") {
    filteredTodos = activeTasks;
  } else if (activeFilter === "completed") {
    filteredTodos = completedTasks;
  }


  return (
    <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8 space-y-6">
      <Header />
      <TodoTabs
        todosLength={todos.length}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        activeCount={activeTasks.length}
        completedCount={completedTasks.length}
      />
      <TodoInput onAddItem={handleAddItem} />
      <TodoList
        todos={filteredTodos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
