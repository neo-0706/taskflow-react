import { useState } from "react";

export default function TodoInput({ onAddItem }) {
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    if (inputText.trim() === "") return;
    onAddItem(inputText);
    setInputText("");
  };
  
  return (
    <div className="flex flex-col gap-2.5 sm:flex-row">
      <div className="relative flex-1">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 shadow-inner transition-all focus:border-indigo-500 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
        />
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-600/30 transition-all hover:bg-indigo-500 active:scale-98 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span>Add Task</span>
      </button>
    </div>
  );
}
