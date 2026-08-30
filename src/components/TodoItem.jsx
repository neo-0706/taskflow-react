export default function TodoItem({ text, isCompleted, category, onToggleTodo, todoId, onDeleteTodo}) {
  return (
    <li
      className={`group flex items-center justify-between gap-3 rounded-xl border p-4 transition-all ${
        isCompleted
          ? "border-slate-800/80 bg-slate-950/40 text-slate-400"
          : "border-slate-700/60 bg-slate-950/70 text-slate-100 hover:border-slate-600 hover:bg-slate-950"
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          aria-label={isCompleted ? "Mark task as incomplete" : "Mark task as complete"}
          onClick={() => onToggleTodo(todoId)}
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all ${
            isCompleted
              ? "border-indigo-500 bg-indigo-600 text-white"
              : "border-slate-500 hover:border-indigo-400 cursor-pointer"
          }`}
        >
          {isCompleted && (
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>

        <span
          className={`text-sm sm:text-base font-medium truncate ${
            isCompleted ? "line-through text-slate-500" : "text-slate-200"
          }`}
        >
          {text}
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {category && (
          <span
            className={`hidden sm:inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
              isCompleted
                ? "bg-slate-900 text-slate-600"
                : "bg-slate-800 text-slate-300"
            }`}
          >
            {category}
          </span>
        )}

        <button
          type="button"
          aria-label="Delete task"
          onClick={() => onDeleteTodo(todoId)}
          className="rounded-lg p-1.5 text-slate-500 opacity-75 transition-colors hover:bg-rose-500/10 hover:text-rose-400 group-hover:opacity-100 cursor-pointer"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}