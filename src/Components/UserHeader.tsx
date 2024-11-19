import React, { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SearchParameters = {
  ALL: "all",
  CAMPAIGNS: "campaigns",
  VOLUNTEERS: "volunteers",
  GALLERY: "gallery",
  USERS: "users",
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParameter, setSearchParameter] = useState(SearchParameters.ALL);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/AboutUs", label: "About" },
    { path: "/Campaigns", label: "Campaigns" },
    { path: "/Gallery", label: "Gallery" },
    { path: "/Contact", label: "Contact" },
  ];

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery("");
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for "${searchQuery}" in "${searchParameter}"`);
    window.location.href = `/search?q=${searchQuery}&type=${searchParameter}`;
  };

  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container flex items-center justify-between px-2 py-6 mx-auto">
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-[#4ade80]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <h1 className="text-2xl font-bold">Futo 1k</h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map(({ path, label }) => (
            <Link
              to={path}
              key={path}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(path);
                console.log(`Navigate to: ${path}`);
              }}
              className={`${
                isActive(path)
                  ? "text-[#4ade80] font-bold"
                  : "text-gray-600 hover:text-[#4ade80]"
              } transition-colors duration-200`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleSearch}
            className="text-gray-600 hover:text-[#4ade80]"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Search Bar Below Navigation */}
      {isSearchOpen && (
        <div className="bg-gray-100 border-t border-gray-300">
          <form onSubmit={handleSearch} className="container flex items-center px-4 py-2 mx-auto gap-2">
            <div className="relative flex-1">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4ade80]"
              />
              <select
                name="Search"
                id="search"
                value={searchParameter}
                onChange={(e) => setSearchParameter(e.target.value)}
                className="absolute py-1 pl-2 pr-8 text-gray-600 -translate-y-1/2 bg-transparent border-l border-gray-300 right-2 top-1/2 focus:outline-none"
              >
                <option value={SearchParameters.ALL}>All</option>
                <option value={SearchParameters.CAMPAIGNS}>Campaigns</option>
                <option value={SearchParameters.GALLERY}>Gallery</option>
              </select>
            </div>
            <button
              type="button"
              onClick={toggleSearch}
              className="p-2 text-gray-600 hover:text-[#4ade80]"
            >
              <X className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;