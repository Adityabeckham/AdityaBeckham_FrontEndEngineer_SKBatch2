import { useState } from "react";
import { roles } from "../data/roles";
import DepartmentFilter from "../components/DepartmentFilter";
import RoleCard from "../components/RoleCard";
import EmptyState from "../components/EmptyState";

export default function RoleExplorer() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const filteredRoles =
    selectedDepartment === "All"
      ? roles
      : roles.filter((role) => role.department === selectedDepartment);

  function handleReset() {
    setSelectedDepartment("All");
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Explore opportunities
        </p>

        <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Find your next role.
        </h2>

        <p className="max-w-2xl leading-7 text-slate-500">
          Discover opportunities and find a position that matches your interests
          and skills.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 text-sm font-semibold text-slate-800">
          Filter by department
        </h3>

        <DepartmentFilter
          selectedDepartment={selectedDepartment}
          onDepartmentChange={setSelectedDepartment}
        />
      </div>

      <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
        <h3 className="font-semibold text-slate-900">Available positions</h3>

        <span className="text-sm text-slate-500" aria-live="polite">
          {filteredRoles.length} roles found
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRoles.length > 0 ? (
          filteredRoles.map((role) => <RoleCard key={role.id} role={role} />)
        ) : (
          <EmptyState onReset={handleReset} />
        )}
      </div>
    </section>
  );
}
