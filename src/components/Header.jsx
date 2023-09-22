import React, { useState } from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import './common.css';
import logo from '../assets/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { LiaWindowClose } from "react-icons/lia";
const Header = () => {
  const navigate= useNavigate()
  const [open, setOpen]= useState(false)
  const [searchOpen, setSearchOpen]= useState(false)

  const activeClass= ({isActive})=> (isActive ? 'active': '')

  const handleSubmit=(e)=> {
    e.preventDefault()
    const qTerm= e.target.search.value
    e.target.reset()
    return navigate(`/search?q=${qTerm}`)
  }
  return (
    <>
    <div className='header'>
     
      <div className='h1'>
      <NavLink to={'/'}>
      <img className='hi1' src={logo} alt="" />
      </NavLink>
      </div>
      
      

    <div className='h2'>
        <div className={open ? 'h21 h21s' : 'h21'}>
      <ul>
        <li><NavLink to={'/'} className={activeClass}>Home</NavLink></li>
        <li><NavLink to={'/popular'} className={activeClass}>Popular</NavLink></li>
        <li><NavLink to={'/top'} className={activeClass}>Top Rated</NavLink></li>
        <li><NavLink to={'/upcoming'} className={activeClass}>Upcoming</NavLink></li>
      </ul>
      </div> 
     

      <div className='h22'>
        <div className='h2inp'>
          <form onSubmit={handleSubmit}>
          <input className='i1' type="text" name='search' placeholder='Search' />
          <button className='bs1' type='submit'><AiOutlineSearch className='ss1' size={22} /></button>
          </form>
      
        </div>
      
      <AiOutlineSearch size={25} className='search' onClick={()=> setSearchOpen(!searchOpen)}/>
     <GiHamburgerMenu size={25} className='hamburger' onClick={()=> setOpen(!open)} />
      </div>
    </div>

      

    </div>
    {searchOpen && <div className='h3'>
    <div className='h2inps'>
          <form onSubmit={handleSubmit}>
          <input className='i1Res' type="text" name='search' placeholder='Search' />
          <button className='bs1' type='submit'><AiOutlineSearch className='ss1' size={22} /></button>
          </form>
      
        </div>
      <LiaWindowClose size={30} onClick={()=> setSearchOpen(!searchOpen)} className='closeh' />
    </div> }
    
    </>
  )
}

export default Header