import React from "react";
import BrowseCard from "./BrowseCard";

export default function Browse() {
  const cardsData = [
    {
      title: "Books: Upto 15% Off Top Reads",
      image: "/e-book.jpg",
      link: "/products/3",
      buttonText: "Browse Now",
    },
    {
      title: "Gadget: Upto 15% Off Best Selling",
      image: "/iphone.jpg",
      link: "/products/2",
      buttonText: "Browse Now",
    },
  ];

  return (
    <div className="h-auto bg-gray-50 pb-10 pt-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cardsData.map((card, idx) => (
            <BrowseCard
              key={idx}
              title={card.title}
              image={card.image}
              link={card.link}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
