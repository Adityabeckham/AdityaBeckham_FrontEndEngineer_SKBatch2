
import { SearchX } from "lucide-react";

export default function EmptyState({ onReset }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        <SearchX size={27} />
      </div>

      <h3 className="mb-2 text-lg font-bold text-slate-900">
        No roles found
      </h3>

      <p className="mb-5 max-w-sm text-sm leading-6 text-slate-500">
        We couldn't find any roles in this department.
        Try exploring another department.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        View all roles
      </button>
    </div>
  );
}
