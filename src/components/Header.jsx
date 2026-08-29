export default function Header() {
  return (
    <header className="space-y-2 text-center sm:text-left">
      <div className="flex items-center justify-center sm:justify-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/30">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          TaskFlow
        </h1>
      </div>
      <p className="text-sm text-slate-400 sm:text-base">
        Stay organized, focused, and accomplish your daily goals.
      </p>
    </header>
  );
}
