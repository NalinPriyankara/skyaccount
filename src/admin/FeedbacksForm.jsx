import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import { useNavigate } from "react-router-dom";

export default function FeedbacksForm() {
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ author, rating, message });
    // TODO: post to API
    navigate("/dashboard/feedbacks");
  };

  return (
    <AdminLayout>
      <div className="p-8 max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Add Feedback</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Author</label>
            <input value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full p-3 rounded-lg bg-accent/20 text-white placeholder:text-zinc-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Rating (1-5)</label>
            <input type="number" value={rating} onChange={(e) => setRating(Number(e.target.value))} min={1} max={5} className="w-32 p-3 rounded-lg bg-accent/20 text-white placeholder:text-zinc-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-3 rounded-lg bg-accent/20 text-white placeholder:text-zinc-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" rows={4} />
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
