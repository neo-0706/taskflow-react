import TodoItem from "./TodoItem";

export default function TodoList() {
  const sampleTodos = [
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
  ];

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-lg font-semibold text-slate-200">Your Tasks</h2>
        <span className="text-xs text-slate-400">3 tasks</span>
      </div>

      <ul className="space-y-2.5">
        {sampleTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            category={todo.category}
          />
        ))}
      </ul>
    </section>
  );
}