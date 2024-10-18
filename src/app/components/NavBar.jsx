"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/rent", name: "Rent Items" },
    { id: 3, link: "/about", name: "About Us" },
    { id: 4, link: "/contact", name: "Contact Us" },
  ];

  const handleNavClick = () => setNav(!nav);
  const handleLinkClick = () => setNav(false);

  return (
    <nav className="w-full h-20 bg-gray-800 flex justify-between items-center px-6">
      {/* Logo Section */}
      <Link href="/">
        <Image
          src="/logo.jpeg"
          alt="Festive Solutions Logo"
          width={70}  // Adjusted width
          height={70} // Adjusted height
          className="cursor-pointer rounded-full bg-dark-blue-900 p-1" // Adjusted padding
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex space-x-8 text-white font-semibold">
        {links.map(({ id, link, name }) => (
          <li key={id} className="hover:text-gray-200">
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      {/* Social Media Icons */}
      <div className="hidden lg:flex space-x-4 text-white">
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

      {/* Mobile Menu Icon */}
      <div onClick={handleNavClick} className="lg:hidden text-white">
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center text-white text-2xl space-y-8">
          {links.map(({ id, link, name }) => (
            <li key={id} onClick={handleLinkClick} className="hover:text-gray-200">
              <Link href={link}>{name}</Link>
            </li>
          ))}
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
        </ul>
      )}
    </nav>
  );
};

export default NavBar;