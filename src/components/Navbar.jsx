import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/works', label: 'Works' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <div className='flex justify-between items-center px-[148px] h-[45px] mt-5'>
      <div className='home'>
        <i></i>
      </div>
      <nav>
        <ul className='flex w-[250px] gap-2 justify-between items-center'>
          {navLinks.map(({ path, label }) => (
            pathname !== path && (
              <li key={path}>
                <Link to={path}>{label}</Link>
              </li>
            )
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;