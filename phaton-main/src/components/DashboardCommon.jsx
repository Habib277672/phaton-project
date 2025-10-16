import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, X, Bell, Search, Home, ShoppingCart, Package, 
  BarChart2, MessageSquare, Settings, List 
} from "lucide-react";

export default function DashboardCommon({ title, children, activeLink }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const links = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/admin/dashboard" },
    { name: "Orders", icon: <ShoppingCart size={20} />, path: "/admin/order" },
    { name: "Products", icon: <Package size={20} />, path: "/admin/product" },
    { name: "Categories", icon: <List size={20} />, path: "#" },
    { name: "Analytics", icon: <BarChart2 size={20} />, path: "/admin/analytics" },
    { name: "Messages", icon: <MessageSquare size={20} />, path: "#" },
    { name: "Settings", icon: <Settings size={20} />, path: "/admin/settings" },
  ];

  // ✅ Close sidebar on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        sidebarOpen
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* ✅ Dark overlay when sidebar is open (mobile only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-white/40 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* ✅ Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-black/70 text-white backdrop-blur-sm transform 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} 
        transition-transform duration-300 ease-in-out lg:translate-x-0 lg:bg-[#1F3446]/95`}
      >
        <div className="flex items-center justify-between h-16 border-b border-gray-700 px-4">
          <span className="select-none text-2xl font-bold">Phaton</span>
          <button
            className="lg:hidden text-gray-300"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="p-4 space-y-4 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-3 p-2 rounded-md cursor-pointer
                ${
                  activeLink === link.name
                    ? "bg-white text-[#1F3446] font-semibold"
                    : "hover:bg-gray-700/60"
                }`}
            >
              {link.icon} {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* ✅ Main content */}
      <div className="flex-1 flex flex-col lg:ml-64 overflow-hidden">
        <header className="flex items-center justify-between bg-white h-16 px-4 shadow-md sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full pl-10 pr-4 py-2 w-64 text-sm"
              />
              <Search className="absolute top-2 left-3 text-gray-400" size={18} />
            </div>

            <div className="flex items-center gap-2">
              <Bell size={22} className="text-gray-600 cursor-pointer" />
              <div className="leading-tight">
                <span className="block font-semibold text-sm sm:text-base">Divine I.</span>
                <span className="text-xs font-light text-gray-400 hidden sm:block">
                  divinei**@phaton.com
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
