'use client'

import { useState, useEffect } from 'react';

const NavItems = [
  { path: "#Home", text: "Home" },
  { path: "#Proyectos", text: "Proyectos" },
  { path: "#About", text: "Sobre mí" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center ${isScrolled ? 'bg-slate-700' : ''}`}>
      {NavItems.map((NavItem) => (
        <a
          key={NavItem.path}
          href={NavItem.path}
          className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          {NavItem.text}
        </a>
      ))}
    </nav>
  );
};

