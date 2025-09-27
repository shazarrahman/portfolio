import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'
import CTA from './CTA'
import ME from '../../asset/me.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello , Myself</h5>
        <h1>Shazar Rahman</h1>
        <h5 className="text-light">Full-Stack Software Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
        <img src={ME} alt="me"/>
        </div>
        <a href="#footer" className='scroll__down'>Scroll Down   <AiOutlineArrowRight/></a>

      </div>
    </header>
  )
}

export default Header
