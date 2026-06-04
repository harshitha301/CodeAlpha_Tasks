import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "My Passes",
      path: "/mypasses",
    },
    {
      name: "Admin Panel",
      path: "/admin",
    },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 mb-8 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-2xl font-bold text-white">
        🚍 SmartPassCloud
      </h1>

      <div className="flex gap-3 mt-4 md:mt-0">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-5 py-2 rounded-xl font-medium transition-all ${
              location.pathname === link.path
                ? "bg-cyan-500 text-white"
                : "bg-white/10 text-slate-300 hover:bg-white/20"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;