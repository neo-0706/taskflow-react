import Header from "./Header";
import TodoTabs from "./TodoTabs";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp() {
  return (
    <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8 space-y-6">
      <Header />
      <TodoTabs />
      <TodoInput />
      <TodoList />
    </div>
  );
}