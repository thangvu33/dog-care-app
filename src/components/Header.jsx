import React, { useState, useEffect } from 'react';

import Logo from '../assets/img/logo.svg'

import { CgMenuRight } from 'react-icons/cg'

import Nav from './Nav'
import NavMobile from './NavMobile'
import Program from './Program'


const Header = () => {
  const [bg, setBg] = useState(false)
  const [navMobile, setNavMobile ] =useState(false)


  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth >= 1024 ? setNavMobile(false) :  ''
    })
  })

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })

  return (
    <header className={`${bg ? 'bg-white py-3 shadow-md' : 'bg-none py-5'} fixed w-full right-0 left-0 z-10 transition-all duration-200 `}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="">
          <img src={Logo} alt="" />
        </a>
        <div className='hidden lg:flex'>
          <Nav />
        </div>
        <Program />
        <div
          onClick={() => setNavMobile(!navMobile)}
          className='lg:hidden cursor-pointer'>
          <CgMenuRight className='text-blue text-3xl '/>
        </div>
        <div className={`${navMobile ? 'max-h-[260px]' : 'max-h-0'} fixed bg-yellow shadow-lg left-0 h-full top-[78px] w-full overflow-hidden transition-all `}>
          <NavMobile />
        </div>
      </div>
    </header>
  )
};

export default Header;
