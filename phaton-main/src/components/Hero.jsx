import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const ImgLink = ({ src, alt, to = "/", className }) => (
  <Link to={to}>
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-in-out hover:scale-105 ${
          className || ""
        }`}
        loading="lazy"
      />
    </div>
  </Link>
);

export default function Hero() {
  return (
    <section className="w-full mx-auto px-2 md:px-6 py-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        className="rounded-2xl shadow-lg"
      >
        {/* Image Slide */}
        <SwiperSlide>
          <ImgLink src="/banner.jpg" alt="Banner" to="/" />
        </SwiperSlide>

        {/* Text Slide */}
        <SwiperSlide>
          <Link to="/">
            <div className="rounded-2xl bg-lavender-2 p-6 md:p-10 flex flex-col justify-between h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Shop Everything <br /> Sell Anything <br /> One Marketplace
              </h1>
              <p className="text-lg md:text-2xl lg:text-3xl tracking-[0.25em] md:tracking-[0.35em] text-gray-600 uppercase mt-6">
                just for you
              </p>
            </div>
          </Link>
        </SwiperSlide>

        {/* Other Image Slides */}
        <SwiperSlide>
          <ImgLink src="/mic.jpg" alt="Wireless mic gear" to="/" />
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
            <div className="rounded-2xl bg-lavender flex flex-col items-center justify-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] p-6 md:p-10">
              <div className="text-center space-y-2">
                {["Turn", "Ideas", "Digital"].map((text, idx) => (
                  <p
                    key={idx}
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <ImgLink
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1460&auto=format&fit=crop"
            alt="Chip"
            to="/"
          />
        </SwiperSlide>

        <SwiperSlide>
          <ImgLink
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop"
            alt="Code on monitor"
            to="/"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
            <div className="rounded-2xl bg-lavender-2 flex flex-col items-center justify-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] p-6 md:p-8">
              <div className="text-center space-y-2">
                {["Create", "Your", "Future"].map((text, idx) => (
                  <p
                    key={idx}
                    className="text-xl md:text-2xl lg:text-3xl font-semibold"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <ImgLink
            src="https://developers.redhat.com/sites/default/files/styles/card_hero/public/2024_Ebook_GitOps_Cookbook_tilecard.png?itok=lG9IJz-W"
            alt="E-book"
            to="/"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
