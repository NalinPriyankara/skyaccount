import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout";

export default function Contacts() {
  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Contact Messages</h1>
          <Link to="/dashboard/contacts/new" className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500 text-black rounded-md font-semibold hover:opacity-90 cursor-pointer">+ Add Contact</Link>
        </div>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-black/30 border border-white/5">
            <div className="text-sm text-zinc-400">From: client@example.com</div>
            <p className="mt-2">"Interested in integration"</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
