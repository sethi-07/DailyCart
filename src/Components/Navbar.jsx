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
    page:'about',
    link:'/about'
  }
]
const Navbar = () => {
  const NavItems = ({item}) => {
    return <NavLink to = {item?.link}>{item?.page}</NavLink>
  }
  return (
    <div className='w-full h-20 flex items-center justify-between gap-10 capitalize'>
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
        <Link to = {'/login'} className='text-base font-bold capitalize'>login</Link>
        <span className='h-5 w-1 bg-[#5e9eed] inline-block rounded-2xl'></span>
        <Link to = {'/register'} className='text-base font-bold capitalize'>signup</Link>
      </div>
    </div>
  )
}

export default Navbar