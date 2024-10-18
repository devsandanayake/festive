"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar, FaChair, FaUtensils, FaCampground, FaLightbulb, FaTable, FaGift, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons
import { MdChevronLeft, MdChevronRight } from "react-icons/md"; // For slider arrows

const items = [
  { id: 1, name: "Chairs", image: "/ch.webp", rating: 4.5, price: 50 },
  { id: 2, name: "Plates", image: "/1.png", rating: 4, price: 10 },
  { id: 3, name: "Tents", image: "/2.jpg", rating: 5, price: 200 },
  { id: 4, name: "Lights", image: "/3.jpeg", rating: 4, price: 80 },
  { id: 5, name: "Tables", image: "/4.jpeg", rating: 3.5, price: 100 },
  { id: 6, name: "Decorations", image: "/5.jpeg", rating: 4.5, price: 150 },
];

const sliderImages = [
  "/7.jpg",
  "/8.jpg",
  "/9.webp",
  "/10.jpg",
  "/11.jpg",
  "/12.jpg",
  "/13.jpg",
  "/14.jpg",
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 });

  // Auto slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handlePriceChange = (e) => {
    setPriceFilter({
      ...priceFilter,
      [e.target.name]: Number(e.target.value),
    });
  };

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) &&
      item.price >= priceFilter.min &&
      item.price <= priceFilter.max
  );

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    alert("Order submitted successfully!");
    setSelectedItem(null);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        {halfStar && <FaStar className="text-yellow-500 half-star" />}
        <span className="ml-2 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const tagIcons = {
    Chairs: <FaChair />,
    Plates: <FaUtensils />,
    Tents: <FaCampground />,
    Lights: <FaLightbulb />,
    Tables: <FaTable />,
    Decorations: <FaGift />,
  };
  const tagColors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
  ];
  

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Slider Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        ))}

        {/* Slider Arrows */}
        <div
          className="absolute top-1/2 left-4 text-white cursor-pointer"
          onClick={prevSlide}
        >
          <MdChevronLeft size={40} />
        </div>
        <div
          className="absolute top-1/2 right-4 text-white cursor-pointer"
          onClick={nextSlide}
        >
          <MdChevronRight size={40} />
        </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to Festive Solutions</h1>
          <p className="text-lg mb-8">Rent Event Items Easily for Any Occasion</p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="w-full py-8 flex flex-col items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8 bg-gray-200 py-8">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search for items..."
            className="px-4 py-2 border rounded-md mb-4 w-full max-w-md"
            onChange={handleSearch}
          />

          {/* Circle Tag List */}
            
                <div className="flex space-x-4">
                  {["Chairs", "Plates", "Tents", "Lights", "Tables", "Decorations"].map(
                    (tag, index) => (
                      <div
                        key={index}
                        className={`w-16 h-16 rounded-full ${tagColors[index]} bg-opacity-75 flex items-center justify-center text-white text-sm cursor-pointer hover:opacity-90 transition-opacity shadow-lg`}
                        style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)" }}
                      >
                        {tagIcons[tag]}
                      </div>
                    )
                  )}
                </div>
          {/* E-commerce Web Design Text */}
          <div className="text-center text-gray-700 mt-4 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-2">Festive Solutions</h2>
            <p className="text-sm">Find everything you need for your event with ease.</p>
          </div>
        </div>
      </section>

      {/* Items Section */}
      <section className="w-full py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <div className="relative h-48 mb-4">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
                       <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.name}</h3>
            {renderStars(item.rating)}
            <p className="text-gray-700 mb-4">Rent Price: ${item.price}/day</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => handleItemClick(item)}
            >
              Rent Now
            </button>
          </div>
        ))}
      </section>

      {/* Order Form Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
            <h3 className="text-2xl font-semibold mb-4">Order {selectedItem.name}</h3>
            <form onSubmit={handleSubmitOrder}>
              <div className="mb-4">
                <label className="block mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Quantity</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
              >
                Submit Order
              </button>
            </form>
            <button
              className="mt-4 text-red-500 underline"
              onClick={() => setSelectedItem(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold">Festive Solutions</h3>
            <p className="text-sm">Your one-stop shop for event rentals.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">&copy; 2024 Festive Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}