import React, { useState, useEffect } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ added

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x bg-[length:200%_200%]">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          Navnit<span className="text-yellow-300">'s Portfolio</span>
        </h1>

        {/* Navigation Links */}
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
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
          >
            {dark ? <Sun className="text-yellow-300" /> : <Moon />}
          </button>

          {/* ✅ Clickable Menu */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu />
            </button>
          </div>

        </div>
      </nav>

      {/* ✅ Mobile Menu (added) */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4 pb-4">
          <ul className="flex flex-col gap-4 text-center">
            {['about', 'projects', 'skills', 'contact'].map((id) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
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