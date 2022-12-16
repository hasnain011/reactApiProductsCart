import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  // useSelector is working as subsciber in redux which means it automatically gives and updated value when it changes
  const items = useSelector((state)=> state.cart)
  return (
    
    <div className='nav'>
    <span className='logo'>Redux-toolkit</span>
    <div className='links'>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/cart">Cart</Link>
    </div>
    <span className='cart-count'>Cart items: {items.length}</span>
      
    </div>
  )
}

export default Navbar
