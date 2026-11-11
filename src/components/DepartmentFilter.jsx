
const departments = [
    "All",
    "Engineering",
    "Design",
    "Marketing",
    "Human Resources",
    "Operations",
  ];
  
  export default function DepartmentFilter({
    selectedDepartment,
    onDepartmentChange,
  }) {
    return (
      <div className="flex flex-wrap gap-2">
        {departments.map((department) => (
          <button
            key={department}
            type="button"
            onClick={() => onDepartmentChange(department)}
            aria-pressed={selectedDepartment === department}
            className={`rounded-full px-4 py-2 text-sm font-medium
              transition-colors focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-indigo-600
              ${
                selectedDepartment === department
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
          >
            {department === "All" ? "All Departments" : department}
          </button>
        ))}
      </div>
    );
  }
  