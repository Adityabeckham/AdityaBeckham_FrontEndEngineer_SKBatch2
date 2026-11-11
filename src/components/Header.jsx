
import { BriefcaseBusiness } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="#home"
          className="flex items-center gap-2.5"
          aria-label="Careerly home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <BriefcaseBusiness size={19} />
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            careerly
          </span>
        </a>

        <span className="text-sm font-medium text-slate-500">
          Career Opportunities
        </span>
      </nav>
    </header>
  );
}
