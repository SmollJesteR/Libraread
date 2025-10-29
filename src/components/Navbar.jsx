import { useState } from 'react';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('catalogue');

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-green-light to-white border-b-3 border-green shadow-md px-8 py-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center gap-2 cursor-pointer">
        <img 
          src="/src/assets/favicon-32x32.png" 
          alt="LibraRead Logo" 
          className="w-8 h-8 object-contain"
        />
        <h1 className="text-green text-3xl font-semibold">LibraRead</h1>
      </div>
      
      <div className="flex gap-8 mt-4 md:mt-0 md:mx-auto px-8">
        <button 
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:text-green
            ${activeItem === 'catalogue' 
              ? 'bg-green text-white hover:bg-green-dark hover:text-white' 
              : 'text-green-dark'}`}
          onClick={() => setActiveItem('catalogue')}
        >
          Catalogue
        </button>
        <button 
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:text-green
            ${activeItem === 'about' 
              ? 'bg-green text-white hover:bg-green-dark hover:text-white' 
              : 'text-green-dark'}`}
          onClick={() => setActiveItem('about')}
        >
          About
        </button>
        <button 
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:text-green
            ${activeItem === 'testimonial' 
              ? 'bg-green text-white hover:bg-green-dark hover:text-white' 
              : 'text-green-dark'}`}
          onClick={() => setActiveItem('testimonial')}
        >
          Testimonial
        </button>
      </div>
    </nav>
  );
}