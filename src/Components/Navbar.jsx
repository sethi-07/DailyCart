import React from 'react'
import { Link, NavLink} from 'react-router'
import { SiDailydotdev } from "react-icons/si";
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
  const NavItems = ({item}) => {
    return <NavLink to = {item?.link}>{item?.page}</NavLink>
  }
  return (
    <div className='w-full h-15 bg-blue-300'>
      <div className='mx-auto px-4 pt-4 w-full flex items-center justify-around gap-10 capitalize'>
     
      <div>
          <Link to = {"/login"} className='text-base flex items-center gap-2 font-medium'><SiDailydotdev />DailyCart</Link>
      </div>

      <nav className='flex gap-5'>
        {
          navLinks?.map(item =>(
            <NavItems item={item} />
          ))
        }
      </nav>

      <div className='flex items-center gap-2'>
        <Link to = {'/login'} className='text-base capitalize font-semibold'>login</Link>
        <span className='h-5 w-0.5 bg-[#ff9d00] inline-block rounded-2xl'></span>
        <Link to = {'/register'} className='text-base capitalize font-semibold'>signup</Link>
      </div>
    </div>
    </div>
  )
}

export default Navbar