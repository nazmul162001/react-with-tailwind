import React from 'react';

const Lilnk = (props) => {
  const {name, link} = props.route;
  return (
        <li className='mr-12 px-10'>
           <a href= {link}> {name} </a>
        </li>
      );
};

export default Lilnk;