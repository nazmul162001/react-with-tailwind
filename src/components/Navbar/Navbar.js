import React from 'react';
import Lilnk from '../Link/Lilnk';

const Navbar = () => {
  const routes = [
    {id: 1, name: 'Home', link: '/home'},
    {id: 2, name: 'Shop', link: '/shop'},
    {id: 3, name: 'Deals', link: '/deals'},
    {id: 4, name: 'Coupons', link: '/coupons'},
    {id: 5, name: 'Contact', link: '/contact'}
  ]
  return (
    <nav>
      <ul className='md:flex justify-center py-10'>
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