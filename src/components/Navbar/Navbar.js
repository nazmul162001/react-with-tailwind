import React, { useState } from 'react';
import Lilnk from '../Link/Lilnk';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    {id: 1, name: 'Home', link: '/home'},
    {id: 2, name: 'Shop', link: '/shop'},
    {id: 3, name: 'Deals', link: '/deals'},
    {id: 4, name: 'Coupons', link: '/coupons'},
    {id: 5, name: 'Contact', link: '/contact'}
  ]
  return (
    <nav className='bg-indigo-300'>
      <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
        {open ? <XIcon /> : <MenuIcon />}
      </div>
      <ul className={`md:flex md:static justify-center absolute duration-500 ease-in bg-indigo-300 w-full ${open ? 'top-6' : 'top-[-120px]' }`}>
          {
            routes.map(route => <Lilnk 
            key = {route.id}
            route = {route}
            />)
          }
      </ul>
    </nav>
  );
};

export default Navbar;