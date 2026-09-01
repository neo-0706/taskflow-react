export default function TodoTabs({
  todosLength,
  activeFilter,
  onFilterChange,
  activeCount,
  completedCount,
}) {
  return (
    <div className="flex items-center border-b border-slate-700/60 text-sm font-medium">
      <button
        onClick={() => onFilterChange("all")}
        type="button"
        className={`flex items-center gap-2 border-b-2 px-4 py-3 ${
          activeFilter === "all"
            ? "border-indigo-500 text-indigo-400 transition-colors"
            : "border-transparent text-slate-400 hover:border-slate-600 hover:text-slate-200 transition-colors"
        }`}
      >
        <span>All Tasks</span>
        <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs font-semibold text-indigo-300">
          {todosLength}
        </span>
      </button>

      <button
        type="button"
        onClick={() => onFilterChange("active")}
        className={`flex items-center gap-2 border-b-2 px-4 py-3 ${
          activeFilter === "active"
            ? "border-indigo-500 text-indigo-400 transition-colors"
            : "border-transparent text-slate-400 hover:border-slate-600 hover:text-slate-200 transition-colors"
        }`}
      >
        <span>Active</span>
        <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs font-semibold text-slate-300">
          {activeCount}
        </span>
      </button>

      <button
        type="button"
        onClick={() => onFilterChange("completed")}
        className={`flex items-center gap-2 border-b-2 px-4 py-3 ${
          activeFilter === "completed"
            ? "border-indigo-500 text-indigo-400 transition-colors"
            : "border-transparent text-slate-400 hover:border-slate-600 hover:text-slate-200 transition-colors"
        }`}
      >
        <span>Completed</span>
        <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs font-semibold text-slate-300">
          {completedCount}
        </span>
      </button>
    </div>
  );
}
