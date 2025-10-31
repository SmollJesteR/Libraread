import { useState } from 'react';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('catalogue');
  const [open, setOpen] = useState(false);

  const handleSelect = (id) => {
    setActiveItem(id);
    setOpen(false); // close mobile menu after selection
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-green-light to-white border-b-3 border-green shadow-md px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="/src/assets/favicon-32x32.png"
            alt="LibraRead Logo"
            className="w-8 h-8 object-contain"
          />
          <h1 className="text-green text-2xl md:text-3xl font-semibold">LibraRead</h1>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:text-green
              ${activeItem === 'catalogue' ? 'bg-green text-white' : 'text-green-dark'}`}
            onClick={() => handleSelect('catalogue')}
          >
            Catalogue
          </button>

          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:text-green
              ${activeItem === 'about' ? 'bg-green text-white' : 'text-green-dark'}`}
            onClick={() => handleSelect('about')}
          >
            About
          </button>

          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:text-green
              ${activeItem === 'testimonial' ? 'bg-green text-white' : 'text-green-dark'}`}
            onClick={() => handleSelect('testimonial')}
          >
            Testimonial
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="p-2 rounded-md text-green-dark hover:text-green focus:outline-none focus:ring-2 focus:ring-green"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md mx-4 mt-3 rounded-lg p-4">
          <ul className="flex flex-col gap-3">
            <li>
              <button
                className={`w-full text-left px-3 py-2 rounded-md font-semibold ${activeItem === 'catalogue' ? 'bg-green text-white' : 'text-green-dark hover:text-green'}`}
                onClick={() => handleSelect('catalogue')}
              >
                Catalogue
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-3 py-2 rounded-md font-semibold ${activeItem === 'about' ? 'bg-green text-white' : 'text-green-dark hover:text-green'}`}
                onClick={() => handleSelect('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-3 py-2 rounded-md font-semibold ${activeItem === 'testimonial' ? 'bg-green text-white' : 'text-green-dark hover:text-green'}`}
                onClick={() => handleSelect('testimonial')}
              >
                Testimonial
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}