import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const cn = (...classes) => classes.filter(Boolean).join(" ")

const navItems = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contacts", href: "/contacts" },
]

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <Link to="/" className="text-2xl font-semibold tracking-wide">
          <span className="text-purple-500">Marco</span> Portfolio
        </Link>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <ul className="hidden md:flex space-x-8 text-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={cn(
                  "transition-colors duration-200 hover:text-purple-400",
                  location.pathname === item.href ? "text-purple-500" : "text-white"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-purple-500">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "text-lg transition-colors duration-200 hover:text-purple-400",
                    location.pathname === item.href ? "text-purple-500" : "text-white"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
