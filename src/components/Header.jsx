import React, { useState, useEffect } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-[#0B1026]/95 via-[#111827]/95 to-[#1E1B4B]/95">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition duration-300"
          />

          <h1 className="text-2xl font-extrabold text-white tracking-wide">
            Navnit<span className="text-yellow-300">'s Portfolio</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white font-medium tracking-wide">
          {['about', 'projects', 'skills', 'contact'].map((id) => (
            <li key={id}>
              <Link
                to={id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-yellow-300"
                className="cursor-pointer relative px-2 py-1 transition duration-300
                after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
                after:bg-yellow-300 after:transition-all after:duration-300
                hover:after:w-full"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4 text-white">

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            {dark ? (
              <Sun className="text-yellow-300" />
            ) : (
              <Moon />
            )}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#0B1026] via-[#111827] to-[#1E1B4B] text-white px-4 pb-4 border-t border-white/10">
          <ul className="flex flex-col gap-4 text-center">
            {['about', 'projects', 'skills', 'contact'].map((id) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 hover:text-yellow-300 cursor-pointer"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </header>
  );
};

export default Header;