import React from "react";
import AdminLayout from "./AdminLayout";
import { motion } from "framer-motion";
import { Folder, MessageCircle, Mail } from "lucide-react";

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="p-8">
        <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-black mb-6">Admin Dashboard</motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-accent/20 border border-cyan-600">
            <div className="text-sm text-zinc-100 uppercase tracking-widest mb-2">Projects</div>
            <div className="text-2xl font-bold">12</div>
            <p className="text-sm text-zinc-400 mt-3">Manage and review project entries.</p>
          </div>

          <div className="p-6 rounded-2xl bg-accent/20 border border-cyan-600">
            <div className="text-sm text-zinc-100 uppercase tracking-widest mb-2">Feedbacks</div>
            <div className="text-2xl font-bold">34</div>
            <p className="text-sm text-zinc-400 mt-3">User feedback and ratings.</p>
          </div>

          <div className="p-6 rounded-2xl bg-accent/20 border border-cyan-600">
            <div className="text-sm text-zinc-100 uppercase tracking-widest mb-2">Contact Messages</div>
            <div className="text-2xl font-bold">7</div>
            <p className="text-sm text-zinc-400 mt-3">Incoming contact inquiries.</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
