"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-4 py-3 md:py-4 max-w-6xl mx-auto">
        <h1 className="z-10">
          <Link href="#" className="block">
            <Image 
              src="/images/logo.png" 
              alt="YUTTORE" 
              width={150} 
              height={50}
              className="w-auto h-10 md:h-12"
            />
          </Link>
        </h1>
        
        <div 
          className={`z-20 md:hidden cursor-pointer`}
          onClick={toggleMenu}
        >
          <span className={`block w-6 h-0.5 bg-gray-800 mb-1.5 transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
        </div>
        
        <nav 
          className={`
            fixed md:relative top-0 right-0 h-screen md:h-auto w-full md:w-auto 
            bg-white md:bg-transparent 
            transform transition-transform duration-300 ease-in-out 
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} 
            flex items-center justify-center md:block z-10
          `}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            <li><Link href="#" className="text-lg md:text-base font-medium hover:text-[#ff9800] transition-colors" onClick={() => setIsMenuOpen(false)}>トップ</Link></li>
            <li><Link href="#recommend" className="text-lg md:text-base font-medium hover:text-[#ff9800] transition-colors" onClick={() => setIsMenuOpen(false)}>おすすめ</Link></li>
            <li><Link href="#service" className="text-lg md:text-base font-medium hover:text-[#ff9800] transition-colors" onClick={() => setIsMenuOpen(false)}>サービス</Link></li>
            <li><Link href="#voice" className="text-lg md:text-base font-medium hover:text-[#ff9800] transition-colors" onClick={() => setIsMenuOpen(false)}>口コミ</Link></li>
            <li><Link href="#comparison" className="text-lg md:text-base font-medium hover:text-[#ff9800] transition-colors" onClick={() => setIsMenuOpen(false)}>比較</Link></li>
            <li><Link href="#faq" className="text-lg md:text-base font-medium hover:text-[#ff9800] transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</Link></li>
            <li><Link href="#benefits" className="text-lg md:text-base font-medium hover:text-[#ff9800] transition-colors" onClick={() => setIsMenuOpen(false)}>特典</Link></li>
            <li><Link href="#contact" className="text-lg md:text-base font-medium hover:text-[#ff9800] transition-colors" onClick={() => setIsMenuOpen(false)}>お問合せ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
