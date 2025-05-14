import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to check if a route is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Navigation items for the sidebar
  const navItems = [
    { icon: "dashboard", label: "Dashboard", path: "/dashboard" },
    { icon: "mail", label: "Enquiries", path: "/enquiries" },
    { icon: "description", label: "Quotation", path: "/quotation" },
    { icon: "assessment", label: "Measurement Summaries", path: "/measurement-summaries" },
    { icon: "receipt", label: "Bill of Materials", path: "/bill-of-materials" },
    { icon: "work", label: "Job Order", path: "/job-order" },
    { icon: "inventory", label: "Material Requisition Voucher", path: "/material-requisition" },
    { icon: "settings", label: "Settings", path: "/settings" },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white flex flex-col">
        {/* Logo area */}
        <div className="p-4 border-b border-blue-700 flex items-center space-x-2">
          <span className="text-2xl">📊</span>
          <h1 className="text-xl font-bold">Manufacturing</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center py-3 px-4 ${
                    isActive(item.path)
                      ? "bg-blue-900"
                      : "hover:bg-blue-700"
                  }`}
                >
                  <span className="w-8 h-8 flex items-center justify-center mr-2">
                    <i className="material-icons">{item.icon}</i>
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{location.pathname === "/" ? "Dashboard" : location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.slice(2)}</h1>
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center">
                <span className="mr-2">Admin</span>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white"
                >
                  <span className="material-icons">person</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsLoggedIn(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Login
              </button>
            )}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout; 