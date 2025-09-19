import React from "react";
import Slider from "react-slick";

type Promotion = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const promotions: Promotion[] = [
  {
    id: 1,
    title: "Save 30% on Europe Trips",
    description: "Book before Oct 30th and enjoy massive savings on all European destinations.",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Dubai Luxury Deals",
    description: "Get 5-star hotel and flights at discounted rates for Dubai travel packages.",
    image:
      "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Asia Adventure",
    description: "Special discounts for Tokyo, Bangkok, and Bali trips this holiday season.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
  },
];

const SpecialPromotions: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">🔥 Special Promotions</h2>

        <Slider {...settings}>
          {promotions.map((promo) => (
            <div key={promo.id} className="px-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-6">
                  <h3 className="text-3xl font-semibold mb-4">{promo.title}</h3>
                  <p className="text-lg max-w-2xl">{promo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SpecialPromotions;
