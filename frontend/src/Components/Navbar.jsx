import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from "../store/authSlice";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const itemCount = useSelector((state) => state.cart.itemCount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/");
  };

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Menu', to: 'menu' },
    { name: 'Mobile-App', to: 'mobile-app' },
    { name: 'Contact Us', to: 'contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <RouterLink to="/">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            </RouterLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-64} // Adjust based on navbar height
                className="cursor-pointer text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>

          {/* Icons and Auth Button */}
          <div className="hidden md:flex items-center space-x-4">
            <img src="/search_icon.png" alt="Search" className="h-5 w-5" />
            {
              itemCount > 0 ? (
                <div className='relative'>
                  <img
                    src="/basket_icon.png" alt="Basket"
                    className="h-6 w-5"
                    onClick={() => navigate("/cart")}
                  />
                  <p className="absolute top-0 left-0 text-xs bg-red-500 text-white rounded-full px-1">{itemCount}</p>
                </div>
              ) : (
                <img
                  src="/basket_icon.png" alt="Basket"
                  className="h-5 w-5"
                  onClick={() => navigate("/cart")}
                />
              )
            }
            {isLoggedIn ? (
              <button
                onClick={handleSignOut}
                className="text-gray-500 border border-orange-500 py-1 px-5 rounded-2xl"
              >
                Sign Out
              </button>
            ) : (
              <RouterLink
                to="/signin"
                className="text-gray-500 border border-orange-500 py-1 px-5 rounded-2xl"
              >
                Sign In
              </RouterLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500 focus:outline-none"
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-64}
              className="block cursor-pointer text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </ScrollLink>
          ))}
          <div className="flex items-center space-x-4 px-3 py-2">
            <img src="/search_icon.png" alt="Search" className="h-5 w-5" />
            {
              itemCount > 0 ? (
                <div className='relative'>
                  <img
                    src="/basket_icon.png" alt="Basket"
                    className="h-6 w-5"
                    onClick={() => navigate("/cart")}
                  />
                  <p className="absolute top-0 left-0 text-xs bg-red-500 text-white rounded-full px-1">{itemCount}</p>
                </div>
              ) : (
                <img
                  src="/basket_icon.png" alt="Basket"
                  className="h-5 w-5"
                  onClick={() => navigate("/cart")}
                />
              )
            }
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleSignOut();
                  setIsOpen(false);
                }}
                className="text-gray-500 border border-orange-500 py-1 px-5 rounded-2xl"
              >
                Sign Out
              </button>
            ) : (
              <RouterLink
                to="/signin"
                className="text-gray-500 border border-orange-500 py-1 px-5 rounded-2xl"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </RouterLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
