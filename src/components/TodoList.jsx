import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggleTodo, onDeleteTodo, onEditTodo }) {
  if (todos.length > 0) {
    return (
      <section className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-lg font-semibold text-slate-200">Your Tasks</h2>
          <span className="text-xs text-slate-400">
            {todos.length} {todos.length === 1 ? "task" : "tasks"}
          </span>
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
              onDeleteTodo={onDeleteTodo}
              onEditTodo={onEditTodo}
            />
          ))}
        </ul>
      </section>
    );
  } else {
    return (
      <section className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-700/60 bg-slate-800/20 px-4 py-10 text-center transition-all">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-400">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 00-2 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <span className="text-base font-semibold text-slate-200">
          No tasks yet
        </span>
        <p className="mt-1 text-xs text-slate-400">Add your first task!</p>
      </section>
    );
  }
}
