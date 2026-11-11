
import Header from "./components/Header";
import RoleExplorer from "./components/RoleExplorer";

export default function App() {
  return (
    <div id="home" className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <RoleExplorer />
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
        © 2026 Careerly. All rights reserved.
      </footer>
    </div>
  );
}
