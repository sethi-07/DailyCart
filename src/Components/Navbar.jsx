import React, { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'
import { SiDailydotdev } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";


const navLinks = [
  {
    page:'home',
    link:'/'
  },
  {
    page:'shop',
    link:'/shop'
  },
  {
    page:'contact',
    link:'/contact'
  },
  {
    page:'about us',
    link:'/about'
  }
]
const Navbar = () => {

  const [isOpenMenu, setOpenMenu] = useState(false);

  const NavItems = ({ item, className = '' }) => {
  return (
    <NavLink
      to={item?.link}
      className={`hover:text-blue-900 transition-colors ${className}`}
    >
      {item?.page}
    </NavLink>
  )
}

  return (
    <div className='w-full h-16 bg-black text-white'>
      <div className='mx-auto px-6 h-full w-full flex items-center justify-between  gap-10 capitalize'>
     
      <div className='flex gap-6'>
          <button onClick={() => setOpenMenu(!isOpenMenu)} className='cursor-pointer text-3xl md:hidden'><GiHamburgerMenu /></button>
          <Link to = {"/login"} className='text-lg flex items-center gap-2 text-cyan-200 font-medium'><SiDailydotdev />DailyCart</Link>
      </div>

      <nav className='hidden md:flex gap-6 font-semibold'>
        {
          navLinks?.map(item =>(
            <NavItems item={item} />
          ))
        }
      </nav>

      <div className='flex items-center gap-3'>
        <Link to = {'/login'} className='text-base capitalize font-semibold'>login</Link>
        <span className='h-5 w-0.5 bg-[#ff9d00] inline-block rounded-2xl'></span>
        <Link to = {'/register'} className='text-base capitalize font-semibold'>signup</Link>
        <Link to = {'/'} className='w-10 h-10' ><img src="/rm.jpg" className='w-full h-full object-cover rounded-full border-white border-2'></img></Link>
      </div>

      <nav
      className={`fixed top-16 left-0 max-w-[350px] w-full h-screen
      bg-cyan-900 text-white z-50
      transition-transform duration-200
      ${isOpenMenu ? 'translate-x-0' : '-translate-x-full'}
      flex flex-col justify-center p-10 gap-10 text-3xl
      md:-translate-x-full`}
      >
      {navLinks.map(item => (
        <NavItems
          key={item.page}
          item={item}
          className="hover:text-blue-900"
        />
      ))}
    </nav>

    </div>
    </div>
  )
}

export default Navbar