// src/pages/AdminPage.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 text-2xl font-bold text-blue-600 border-b">
          Admin Panel
        </div>
        <nav className="p-4 space-y-2">
          <Link
            to="products"
            className="block p-2 rounded hover:bg-blue-100 transition"
          >
            Products
          </Link>
          <Link
            to="orders"
            className="block p-2 rounded hover:bg-blue-100 transition"
          >
            Orders
          </Link>
          <Link
            to="reviews"
            className="block p-2 rounded hover:bg-blue-100 transition"
          >
            Reviews
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* This will render nested routes */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}
