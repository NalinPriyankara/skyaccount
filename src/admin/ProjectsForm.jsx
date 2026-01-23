import React, { useState, useRef, useEffect } from "react";
import AdminLayout from "./AdminLayout";
import { useNavigate } from "react-router-dom";

export default function ProjectsForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("draft");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: post to API - example FormData usage
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('status', status);
    if (imageFile) formData.append('image', imageFile);
    // For now just log and navigate back
    console.log('Submitting project form (FormData):', { title, description, status, imageFile });
    navigate("/dashboard/projects");
  };

  return (
    <AdminLayout>
      <div className="p-8 max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">Add Project</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 rounded-lg bg-accent/20 text-white placeholder:text-zinc-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-3 rounded-lg bg-accent/20 text-white placeholder:text-zinc-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" rows={5} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-3 rounded-lg bg-accent/20 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="draft" className="text-black">Draft</option>
                <option value="published" className="text-black">Published</option>
                <option value="archived" className="text-black">Archived</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Upload Image</label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="px-4 py-2 bg-white/5 text-white rounded-md hover:bg-white/10"
                >
                  Choose Image
                </button>
                <span className="text-sm text-zinc-400">{imageFile ? imageFile.name : 'No file chosen'}</span>
              </div>
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const f = e.target.files?.[0] || null;
                  setImageFile(f);
                  if (f) setPreview(URL.createObjectURL(f));
                  else setPreview("");
                }}
                className="hidden"
              />
              {preview && (
                <div className="mt-3">
                  <img src={preview} alt="preview" className="max-h-44 rounded-md object-cover" />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold">Create</button>
            <button type="button" onClick={() => navigate(-1)} className="px-4 py-2 bg-white/5 rounded-lg">Cancel</button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
