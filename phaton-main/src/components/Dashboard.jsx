import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import DashboardCommon from "./DashboardCommon";

export default function Dashboard() {
  const revenueData = [
    { month: "Jul", revenue: 120 },
    { month: "Aug", revenue: 200 },
    { month: "Sep", revenue: 150 },
    { month: "Oct", revenue: 180 },
    { month: "Nov", revenue: 250 },
    { month: "Dec", revenue: 400 },
  ];

  const categoryData = [
    { name: "Ebooks", value: 85 },
    { name: "Courses", value: 66 },
    { name: "Software", value: 90 },
    { name: "Other", value: 30 },
  ];

  const COLORS = ["#4F46E5", "#F59E0B", "#10B981", "#EF4444"];

  const recentOrders = [
    {
      id: "#1234",
      customer: "Alice Johnson",
      product: "Ebook",
      amount: "$45",
      status: "Delivered",
    },
    {
      id: "#1235",
      customer: "Michael Lee",
      product: "Course",
      amount: "$120",
      status: "Pending",
    },
    {
      id: "#1236",
      customer: "Sophia Brown",
      product: "Template",
      amount: "$35",
      status: "Shipped",
    },
    {
      id: "#1237",
      customer: "Daniel White",
      product: "Software",
      amount: "$299",
      status: "Cancelled",
    },
  ];

  return (
    <DashboardCommon title="Dashboard Overview" activeLink="Dashboard">
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
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Revenue</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip cursor={false} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#4F46E5"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Categories Performance</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip cursor={false} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow p-4">
        <h2 className="font-semibold mb-3">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[600px] border-2">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Order ID</th>
                <th className="p-2">Customer</th>
                <th className="p-2">Product</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.customer}</td>
                  <td className="p-2">{order.product}</td>
                  <td className="p-2">{order.amount}</td>
                  <td
                    className={`p-2 font-medium ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Pending"
                        ? "text-yellow-600"
                        : order.status === "Shipped"
                        ? "text-blue-600"
                        : "text-red-600"
                    }`}
                  >
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white rounded-xl mt-8 shadow p-4">
          <h2 className="flex items-center font-semibold mb-3">
            AI Recommendations
            <img
              src="https://simplifyai.in/wp-content/uploads/2024/07/Gemini-logo-1.png"
              alt="Gemini AI"
              className="h-6 w-auto ml-4 opacity-80"
            />
          </h2>
          <div className="space-y-3">
            {[
              {
                text: 'Promote "JavaScript Mastery"',
                detail: "High conversion potential detected",
                sales: "+24%",
              },
              {
                text: "Create bundle: Marketing + Templates",
                detail: "Frequently bought together",
                sales: "+24%",
              },
              {
                text: "Offer discount on Design Course",
                detail: "Low recent sales, high interest",
                sales: "+15%",
              },
            ].map((rec, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between border rounded-lg p-3 gap-3"
              >
                <div>
                  <p className="font-medium">{rec.text}</p>
                  <p className="text-sm text-gray-500">{rec.detail}</p>
                  <p className="text-green-500 text-sm">
                    {rec.sales} expected sales
                  </p>
                </div>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 w-full sm:w-auto">
                  Apply
                </button>
              </div>
            ))}
          </div>
      </section>
    </DashboardCommon>
  );
}
