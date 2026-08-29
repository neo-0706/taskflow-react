export default function TodoTabs({todosLength}) {
  return (
    <div className="flex items-center border-b border-slate-700/60 text-sm font-medium">
      <button
        type="button"
        className="flex items-center gap-2 border-b-2 border-indigo-500 px-4 py-3 text-indigo-400 transition-colors"
      >
        <span>All Tasks</span>
        <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs font-semibold text-indigo-300">
          {todosLength}
        </span>
      </button>

      <button
        type="button"
        className="flex items-center gap-2 border-b-2 border-transparent px-4 py-3 text-slate-400 hover:border-slate-600 hover:text-slate-200 transition-colors"
      >
        <span>Active</span>
        <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs font-semibold text-slate-300">
          2
        </span>
      </button>

      <button
        type="button"
        className="flex items-center gap-2 border-b-2 border-transparent px-4 py-3 text-slate-400 hover:border-slate-600 hover:text-slate-200 transition-colors"
      >
        <span>Completed</span>
        <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs font-semibold text-slate-300">
          1
        </span>
      </button>
    </div>
  );
}