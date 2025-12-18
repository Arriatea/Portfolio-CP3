import { useState } from "react";
import { Menu, X } from "lucide-react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contacts", href: "#contacts" },
];

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white shadow-md z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
      
        <a href="#home" className="text-2xl font-semibold tracking-wide">
        </a>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Itens Desktop */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={cn(
                  "transition-colors hover:text-purple-400",
                  "text-white"
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-purple-500">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-white hover:text-purple-400 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
