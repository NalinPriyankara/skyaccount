import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout";

export default function Feedbacks() {
  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Feedbacks</h1>
          <Link to="/dashboard/feedbacks/new" className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500 text-black rounded-md font-semibold">+ Add Feedback</Link>
        </div>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-black/30 border border-white/5">"Excellent support" — <strong>Customer X</strong></div>
          <div className="p-4 rounded-lg bg-black/30 border border-white/5">"Improved uptime" — <strong>Customer Y</strong></div>
        </div>
      </div>
    </AdminLayout>
  );
}
