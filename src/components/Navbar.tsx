
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useUser();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/a4eb3ee7-40b3-4ea1-8e9e-150416b3bef3.png" 
            alt="National Mobile X-Ray Logo" 
            className="h-10 w-auto" 
          />
        </Link>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
        >
          <span className="sr-only">Open menu</span>
          <svg 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <nav className="hidden space-x-8 md:flex">
          <Link to="/jobs" className="text-base font-medium text-gray-700 hover:text-brand-red transition">Jobs</Link>
          <Link to="/about" className="text-base font-medium text-gray-700 hover:text-brand-red transition">About Us</Link>
          <Link to="/refer" className="text-base font-medium text-gray-700 hover:text-brand-red transition">Refer a Friend</Link>
          <Link to="/faq" className="text-base font-medium text-gray-700 hover:text-brand-red transition">FAQs</Link>
          <Link to="/contact" className="text-base font-medium text-gray-700 hover:text-brand-red transition">Contact</Link>
        </nav>

        {/* Auth buttons (desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-base font-medium text-gray-700 hover:text-brand-red transition"
              >
                Dashboard
              </Link>
              <Button
                variant="outline"
                onClick={signOut}
                className="rounded-md border border-gray-300 px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Link
              to="/auth"
              className="rounded-md border border-gray-300 px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 transition"
            >
              Sign In
            </Link>
          )}
          <Link
            to="/jobs"
            className="rounded-md bg-brand-red px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 transition"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile menu panel */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 z-10 bg-white shadow-lg md:hidden animate-fade-in">
            <div className="space-y-1 px-4 py-4">
              <Link 
                to="/jobs" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-brand-red"
                onClick={() => setIsMenuOpen(false)}
              >
                Jobs
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-brand-red"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/refer" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-brand-red"
                onClick={() => setIsMenuOpen(false)}
              >
                Refer a Friend
              </Link>
              <Link 
                to="/faq" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-brand-red"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-brand-red"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-brand-red"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-brand-red"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/auth"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-brand-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
              
              <Link
                to="/jobs"
                className="block w-full rounded-md bg-brand-red px-4 py-2 text-center font-medium text-white shadow-sm hover:bg-red-700 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
