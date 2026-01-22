import React, { useState, useEffect } from "react";
import AdminLayout from "./AdminLayout";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export default function ProjectsEdit() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const initial = location.state?.project || { id, title: "", description: "" };

  const [title, setTitle] = useState(initial.title);
  const [description, setDescription] = useState(initial.description);

  useEffect(() => {
    if (location.state?.project) return;
    // TODO: fetch project by id from API if needed
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call update API
    console.log("Update project", { id, title, description });
    navigate("/dashboard/projects");
  };

  return (
    <AdminLayout>
      <div className="p-8 max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">Edit Project</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 rounded-lg bg-white/5 text-white placeholder:text-zinc-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-3 rounded-lg bg-white/5 text-white placeholder:text-zinc-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" rows={5} />
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold">Save</button>
            <button type="button" onClick={() => navigate(-1)} className="px-4 py-2 bg-white/5 rounded-lg">Cancel</button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
