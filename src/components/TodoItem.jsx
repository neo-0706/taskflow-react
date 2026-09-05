import { useState } from "react";

export default function TodoItem({
  text,
  isCompleted,
  category,
  onToggleTodo,
  todoId,
  onDeleteTodo,
  onEditTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const [editCategory, setEditCategory] = useState(category || "General");

  const categories = ["Architecture", "Styling", "Setup", "General"];

  const handleSave = () => {
    if (!editText.trim()) return;
    onEditTodo(todoId, editText, editCategory);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(text);
    setEditCategory(category || "General");
    setIsEditing(false);
  };

  // حالت ویرایش تسک
  if (isEditing) {
    return (
      <li className="flex items-center justify-between gap-2 rounded-xl border border-indigo-500/50 bg-slate-950 p-3 shadow-lg">
        <div className="flex flex-1 flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-100 focus:border-indigo-500 focus:outline-none"
            autoFocus
          />
          {/* بخش انتخاب کشویی دسته‌بندی */}
          <select
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
            className="w-full sm:w-36 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-100 focus:border-indigo-500 focus:outline-none cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-lg bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-indigo-500 cursor-pointer transition-colors"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-lg bg-slate-800 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-700 cursor-pointer transition-colors"
          >
            Cancel
          </button>
        </div>
      </li>
    );
  }

  // حالت معمولی (نمایش تسک)
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
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
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
            className={`hidden sm:inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide ${
              isCompleted
                ? "border-slate-800 bg-slate-900/60 text-slate-600"
                : "border-indigo-500/30 bg-indigo-500/10 text-indigo-300"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isCompleted ? "bg-slate-600" : "bg-indigo-400"
              }`}
            />
            {category}
          </span>
        )}

        <button
          type="button"
          aria-label="Edit task"
          onClick={() => setIsEditing(true)}
          className="rounded-lg p-1.5 text-slate-500 opacity-75 transition-colors hover:bg-indigo-500/10 hover:text-indigo-400 focus-visible:outline-none group-hover:opacity-100 cursor-pointer"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-1.414.586H8v-2.414a2 2 0 01.586-1.414z"
            />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Delete task"
          onClick={() => onDeleteTodo(todoId)}
          className="rounded-lg p-1.5 text-slate-500 opacity-75 transition-colors hover:bg-rose-500/10 hover:text-rose-400 focus-visible:outline-none group-hover:opacity-100 cursor-pointer"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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