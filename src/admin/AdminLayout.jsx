import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Home, Folder, MessageCircle, Mail, LogOut, Menu, X, Users } from "lucide-react";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 md:hidden bg-black/70 border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="p-2 rounded-md hover:bg-white/5">
            <Menu className="w-5 h-5 text-cyan-400" />
          </button>
          <div className="text-lg font-black">Admin</div>
        </div>
        <div>
          <button className="p-2 rounded-md hover:bg-white/5">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      <aside className="w-72 bg-black/60 border-r border-white/5 p-6 hidden md:flex flex-col">
        <div className="mb-8">
          <h3 className="text-2xl font-black">Admin</h3>
          <p className="text-sm text-zinc-400">Control Panel</p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <Home className="w-5 h-5 text-cyan-400" />
                <span className="font-bold">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/projects" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <Folder className="w-5 h-5 text-cyan-400" />
                <span className="font-bold">Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/feedbacks" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <MessageCircle className="w-5 h-5 text-cyan-400" />
                <span className="font-bold">Feedbacks</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="font-bold">User Management</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/contacts" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="font-bold">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto">
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Sign out</span>
          </button>
        </div>
      </aside>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 md:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} />
        <aside className={`absolute left-0 top-0 bottom-0 w-72 bg-black/90 p-6 transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-black">Admin</h3>
              <p className="text-sm text-zinc-400">Control Panel</p>
            </div>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-white/5">
              <X className="w-5 h-5 text-zinc-300" />
            </button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" onClick={() => setOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <Home className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/projects" onClick={() => setOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <Folder className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold">Projects</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/feedbacks" onClick={() => setOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <MessageCircle className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold">Feedbacks</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/users" onClick={() => setOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold">User Management</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/contacts" onClick={() => setOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-auto">
            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Sign out</span>
            </button>
          </div>
        </aside>
      </div>

      <main className="flex-1 pt-16 md:pt-0">
        {children}
      </main>
    </div>
  );
}
