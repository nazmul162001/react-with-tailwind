import React from 'react';

const Lilnk = (props) => {
  const {name, link} = props.route;
  return (
        <li className='mr-5 px-5'>
           <a href= {link}> {name} </a>
        </li>
      );
};

export default Lilnk;