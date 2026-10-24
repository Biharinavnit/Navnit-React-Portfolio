
import React, { useState, useEffect } from 'react';
import {
  Menu,
  Sun,
  Moon,
  House,
  User,
  FolderGit2,
  Code2,
  Mail,
  X,
} from 'lucide-react';
import { Link } from 'react-scroll';

const navItems = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Header = () => {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#090d1c]/85 text-white shadow-lg shadow-black/10 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group flex min-w-0 items-center gap-3">
          <img
            src="/logo.svg"
            alt="Portfolio logo"
            className="h-10 w-10 shrink-0 rounded-xl object-contain transition duration-300 group-hover:scale-110 sm:h-12 sm:w-12"
          />
          <span className="truncate text-xl font-extrabold tracking-tight sm:text-2xl">
            Navnit <span className="text-gradient">Portfolio</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <Link
                to={id}
                smooth
                duration={450}
                spy
                offset={-82}
                activeClass="nav-active"
                className="nav-link flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 transition duration-300 hover:bg-white/[0.06] hover:text-white xl:px-4"
              >
                <Icon size={17} />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-amber-300 transition hover:border-violet-400/40 hover:bg-violet-500/15"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] transition hover:bg-violet-500/15 lg:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0c1022]/95 px-4 py-4 backdrop-blur-2xl lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth
                  duration={450}
                  offset={-78}
                  onClick={() => setMenuOpen(false)}
                  className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-slate-200 transition hover:bg-violet-500/15 hover:text-white"
                >
                  <Icon size={18} className="text-violet-300" />
                  {label}
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
