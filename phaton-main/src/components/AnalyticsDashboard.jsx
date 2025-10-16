import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import DashboardCommon from "./DashboardCommon.jsx";

export default function AnalyticsDashboard() {
  const revenueData = [
    { month: "Jan", revenue: 20000 }, { month: "Feb", revenue: 25000 },
    { month: "Mar", revenue: 30000 }, { month: "Apr", revenue: 50000 },
    { month: "May", revenue: 70000 }, { month: "Jun", revenue: 60000 },
    { month: "Jul", revenue: 80000 }, { month: "Aug", revenue: 120000 },
    { month: "Sep", revenue: 100000 }, { month: "Oct", revenue: 110000 },
    { month: "Nov", revenue: 90000 }, { month: "Dec", revenue: 95000 },
  ];

  const categoryData = [
    { name: "Ebooks", value: 85 }, { name: "Courses", value: 66 },
    { name: "Software", value: 90 }, { name: "Other", value: 30 },
  ];

  const barData = [
    { name: "Ebooks", value: 40000 }, { name: "Courses", value: 120000 },
    { name: "Software", value: 20000 }, { name: "Templates", value: 90000 },
    { name: "Music", value: 70000 },
  ];

  const COLORS = ["#6D28D9", "#F59E0B", "#10B981", "#EF4444"];

  return (
    <DashboardCommon title="Analytics" activeLink="Analytics">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { title: "Total Sales", value: "$127,435", change: "+12%" },
          { title: "Active Products", value: "1,245", change: "+22%" },
          { title: "Total Orders", value: "2,487", change: "-40%" },
          { title: "Customers", value: "18,392", change: "+15%" },
        ].map((stat) => (
          <div
            key={stat.title}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <span className="text-gray-500 text-sm">{stat.title}</span>
            <span className="block text-xl md:text-2xl font-bold">
              {stat.value}
            </span>
            <span
              className={`text-sm ${
                stat.change.startsWith("-") ? "text-red-500" : "text-green-500"
              }`}
            >
              {stat.change} this month
            </span>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div className="bg-white p-4 rounded-xl shadow mb-6 w-full">
        <h3 className="font-semibold mb-2">Revenue & Customer Growth</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" interval={0} />
            <YAxis />
            <Tooltip cursor={false} />
            <Line type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={3} dot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <h3 className="font-semibold mb-2">Categories Performance</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={categoryData} dataKey="value" nameKey="name" outerRadius={90} label>
              {categoryData.map((entry, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip cursor={false} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      </section>

      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">Category Performance Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip cursor={false} />
            <Bar dataKey="value" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashboardCommon>
  );
}
