import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout";

export default function Projects() {
  const [projects, setProjects] = useState(
    [1,2,3,4,5,6].map((i) => ({ id: i, title: `Sample Project ${i}`, description: 'Short description about the project and status.' }))
  );

  const handleDelete = (id) => {
    const ok = window.confirm(`Delete project #${id}?`);
    if (!ok) return;
    // TODO: call API to delete on server
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-black">Projects — Admin</h1>
          <Link to="/dashboard/projects/new" className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500 text-black rounded-md font-semibold">+ Add Project</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.id} className="p-6 rounded-2xl bg-accent/20 border border-cyan-600 flex flex-col">
              <div className="text-sm text-zinc-100 uppercase tracking-widest mb-2">Project #{p.id}</div>
              <div className="text-2xl font-bold">{p.title}</div>
              <p className="text-sm text-zinc-400 mt-3 flex-1">{p.description}</p>
              <div className="mt-4 flex items-center justify-end gap-2">
                <Link to={`/dashboard/projects/${p.id}/edit`} state={{ project: p }} className="px-3 py-1.5 bg-yellow-500 text-black rounded-md hover:opacity-90">Edit</Link>
                <button onClick={() => handleDelete(p.id)} className="px-3 py-1.5 bg-red-600 text-white rounded-md hover:opacity-90">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
