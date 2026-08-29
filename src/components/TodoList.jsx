import TodoItem from "./TodoItem";

export default function TodoList({todos, onToggleTodo}) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-lg font-semibold text-slate-200">Your Tasks</h2>
        <span className="text-xs text-slate-400">{todos.length} {todos.length === 1 ? "task" : "tasks"}</span>
      </div>

      <ul className="space-y-2.5">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            category={todo.category}
            onToggleTodo={onToggleTodo}
            todoId={todo.id}
          />
        ))}
      </ul>
    </section>
  );
}