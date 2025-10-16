import React from "react";
import DashboardCommon from "./DashboardCommon";

const products = Array(12).fill({
  title: "The Complete guide to Digital Marketing",
  category: "Business",
  price: "$12.99",
  rating: 4,
  sales: "12.4k",
  image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80",
});

export default function DashboardProduct() {
  return (
    <DashboardCommon title="Product Management" activeLink="Products">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products.map((product, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4">
            <img src={product.image} alt={product.title} className="rounded-lg w-full h-44 object-cover" />
            <div className="mt-3">
              <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded-full">{product.category}</span>
              <h3 className="text-sm font-semibold mt-2 line-clamp-2">{product.title}</h3>
              <div className="flex items-center gap-1 text-yellow-500 mt-1">
                {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold">{product.price}</span>
                <span className="text-xs text-gray-500">{product.sales} sales</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardCommon>
  );
}
