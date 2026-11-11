
import { MapPin, Briefcase, ArrowUpRight } from "lucide-react";

export default function RoleCard({ role }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg">
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <Briefcase size={21} />
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          {role.type}
        </span>
      </div>

      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
        {role.department}
      </p>

      <h3 className="mb-3 text-lg font-bold text-slate-900">
        {role.title}
      </h3>

      <p className="mb-5 flex-1 text-sm leading-6 text-slate-500">
        {role.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {role.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin size={15} />
          {role.location}
        </div>

        <ArrowUpRight
          size={19}
          className="text-slate-400 transition-colors group-hover:text-indigo-600"
        />
      </div>
    </article>
  );
}
