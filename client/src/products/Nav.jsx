import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './nav.css';

const Nav = () => {
  return (
    <div className='navbar'>
      <div className='links'>
          <Link to='/shop'>Shop</Link>
          <Link to='/cart'>
            <ShoppingCart size={24} />
          </Link>
          <Link to='/profile'>Profile</Link>
      </div>
      </div>
  )
}

export default Nav