import React, { useState } from "react";
import DashboardCommon from "./DashboardCommon";

const ordersData = [
  { id: "DH-2024-0025", customer: "Lisa Brown", product: "Video Editor Pro", payment: "PayPal", amount: "$19.99", status: "refunded" },
  { id: "DH-2024-0024", customer: "Alex Wilson", product: "SEO Analytics Dashboard", payment: "Credit Card", amount: "$9.99", status: "processing" },
  { id: "DH-2024-0023", customer: "Lawal Segun", product: "Ebooks", payment: "PayPal", amount: "$29.99", status: "pending" },
  { id: "DH-2024-0022", customer: "John Smith", product: "Logo Templates", payment: "Stripe", amount: "$79.99", status: "completed" },
  { id: "DH-2024-0021", customer: "Walex R", product: "React Dev", payment: "Credit Card", amount: "$1.99", status: "completed" },
];

const statusClasses = {
  refunded: "bg-red-100 text-red-600 border-red-400",
  processing: "bg-blue-100 text-blue-600 border-blue-400",
  pending: "bg-yellow-100 text-yellow-600 border-yellow-400",
  completed: "bg-green-100 text-green-600 border-green-400",
};

export default function DashboardOrder() {
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(1);

  const filteredOrders = ordersData.filter(
    (order) => order.id.toLowerCase().includes(search.toLowerCase()) || order.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardCommon title="Order Management" activeLink="Orders">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Orders", value: 2847 },
          { label: "Completed", value: 2456 },
          { label: "Processing", value: 234 },
          { label: "Pending", value: 157 },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded shadow p-6 text-center">
            <p className="text-2xl font-semibold">{value.toLocaleString()}</p>
            <p className="mt-1 text-sm text-gray-500">{label}</p>
          </div>
        ))}
      </section>

      <section className="bg-white rounded shadow p-6 overflow-x-auto">
        <table className="min-w-[620px] w-full text-left text-sm border-collapse border-2 table-auto">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-2 px-3 font-semibold">Order id</th>
              <th className="py-2 px-3 font-semibold">Customer</th>
              <th className="py-2 px-3 font-semibold">Product</th>
              <th className="py-2 px-3 font-semibold">Payment</th>
              <th className="py-2 px-3 font-semibold">Amount</th>
              <th className="py-2 px-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(({ id, customer, product, payment, amount, status }) => (
              <tr key={id} className="border-b last:border-none">
                <td className="py-2 px-3">{id}</td>
                <td className="py-2 px-3">{customer}</td>
                <td className="py-2 px-3">{product}</td>
                <td className="py-2 px-3">{payment}</td>
                <td className="py-2 px-3">{amount}</td>
                <td className="py-2 px-3">
                  <span className={`inline-block px-2 py-1 border rounded-full text-xs font-semibold ${statusClasses[status]}`}>
                    {status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-4 gap-2 select-none">
        <span className="mt-1">Previous</span>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`px-3 py-1 rounded ${activePage === page ? "bg-[#163048] text-white" : "bg-gray-200 text-black hover:bg-[#163048] hover:text-white"}`}
            >
              {page}
            </button>
          ))}
        </div>
      </section>
    </DashboardCommon>
  );
}
