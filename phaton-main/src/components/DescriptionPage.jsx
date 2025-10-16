import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function DescriptionPage() {
  const { id } = useParams(); 

  const products = [
    {
      id: 1,
      title: "The Genio Esiste",
      category: "E-books",
      price: "₦30,000",
      image:
        "https://images.unsplash.com/photo-1675378707539-6dd54096e539?fm=jpg&q=60&w=3000",
      description:
        "Genio Esiste is a captivating digital read that blends innovation, insight, and imagination into a seamless e-book experience. Packed with engaging narratives, thought-provoking ideas, and rich details.",
    },
    {
      id: 2,
      title: "Mindful Reader",
      category: "E-books",
      price: "₦25,000",
      image:
        "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=1000&q=80",
      description:
        "Mindful Reader is designed for deep thinkers. It enhances concentration, reduces distractions, and allows you to dive into meaningful stories effortlessly.",
    },
    {
      id: 3,
      title: "Digital Escape",
      category: "E-books",
      price: "₦20,000",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1000&q=80",
      description:
        "Digital Escape offers a refreshing library of adventures that transport you beyond daily stress. Ideal for those who love immersive storytelling.",
    },
    {
      id: 4,
      title: "Focus Journal",
      category: "E-books",
      price: "₦18,000",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1000&q=80",
      description:
        "Focus Journal is crafted for learners. With structured notes and insightful reading, it helps you organize knowledge while enjoying stories.",
    },
    {
      id: 5,
      title: "The Duke and I",
      category: "Novel",
      price: "$100",
      image:
        "https://www.contiki.com/six-two/images/width=1180,height=710,crop=1/2023/04/shayna-douglas-ggfKh9JYvCI-unsplash-e1731064976237.jpg",
      description:
        "A romantic classic filled with drama, elegance, and timeless storytelling. Perfect for readers who love deep emotional narratives.",
    },
    {
      id: 6,
      title: "Html and Css Course",
      category: "Courses",
      price: "$150",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
      description:
        "Learn web development fundamentals with HTML and CSS. Perfect for beginners aiming to start their journey in frontend development.",
    },
    {
      id: 7,
      title: "Electronic Radio",
      category: "Electronics",
      price: "$200",
      image:
        "https://images.unsplash.com/photo-1646621407507-295c5f6ae23b?fm=jpg&q=60&w=3000",
      description:
        "Classic electronic radio with premium sound quality. A must-have gadget for music enthusiasts.",
    },
  ];

  const product = products.find((p) => p.id === Number(id)) || products[0];
  const [activeProduct, setActiveProduct] = useState(product);

  useEffect(() => {
    const found = products.find((p) => p.id === Number(id));
    if (found) setActiveProduct(found);
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="px-4 md:px-8 py-3 text-xs md:text-sm text-gray-600 flex gap-2 flex-wrap">
        <Link to="/" className="hover:text-[#0e6ce8] cursor-pointer">Home</Link>
        <span>/</span>
        <span className="text-gray-800 font-medium">Product details</span>
      </div>

      <main className="flex-1 px-4 md:px-8 lg:px-20 py-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1 flex flex-col items-start">
            <img
              src={activeProduct.image}
              alt={activeProduct.title}
              className="w-full h-80 sm:h-96 lg:h-[450px] rounded-2xl object-cover shadow-md"
            />
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
              {products.slice(0, 4).map((p) => (
                <img
                  key={p.id}
                  src={p.image}
                  alt={p.title}
                  onClick={() => setActiveProduct(p)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover cursor-pointer border transition 
                    ${
                      activeProduct.id === p.id
                        ? "border-2 border-[#1e3a5f] shadow"
                        : "border-gray-300 hover:border-[#1e3a5f]"
                    }`}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full w-fit font-medium">
              {activeProduct.category}
            </span>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                {activeProduct.title}
              </h2>

              <button
                type="button"
                className="flex items-center cursor-pointer px-4 py-2 rounded-lg border border-gray-400 bg-white text-sm md:text-base text-gray-800 hover:bg-gray-200 transition w-full sm:w-auto justify-center"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: activeProduct.title,
                      text: activeProduct.description,
                      url: window.location.href,
                    });
                  } else {
                    alert("Sharing not supported in this browser");
                  }
                }}
              >
                <Share2 className="w-5 cursor-pointer h-5 mr-2" /> Share
              </button>
            </div>

            <p className="text-lg md:text-xl font-semibold text-[#1e3a5f]">
              {activeProduct.price}
            </p>

            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold mb-2 text-gray-900">Description</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {activeProduct.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <button className="flex cursor-pointer items-center justify-center px-4 py-3 min-h-[56px] rounded-lg border border-gray-400 bg-white text-sm md:text-base text-gray-800 hover:bg-gray-200 transition w-full">
                Buy
              </button>

              <button className="flex cursor-pointer items-center justify-center px-4 py-3 min-h-[56px] rounded-lg bg-[#1e3a5f] text-sm md:text-base text-white font-semibold hover:bg-[#152b46] transition w-full text-center">
                Add Cart
              </button>

              <button className="flex cursor-pointer items-center justify-center px-4 py-3 min-h-[56px] rounded-lg border border-gray-400 bg-white text-sm md:text-base text-gray-800 hover:bg-gray-200 transition w-full">
                Report
              </button>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h3 className="text-lg md:text-xl font-semibold mb-6">
            You might also like
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.slice(4).map((p) => (
              <div
                key={p.id}
                onClick={() => setActiveProduct(p)}
                className="bg-white border rounded-xl p-4 flex flex-col cursor-pointer hover:shadow-lg transition"
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="rounded-lg h-48 sm:h-56 w-full object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-[#1e3a5f] text-white text-xs px-2 py-1 rounded shadow">
                    {p.price}
                  </span>
                </div>
                <h4 className="mt-3 font-medium text-gray-900">{p.title}</h4>
                <button className="mt-3 bg-[#1e3a5f] cursor-pointer text-white py-2 rounded-lg text-sm hover:bg-[#152b46] transition">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
