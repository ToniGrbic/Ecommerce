import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { BsFillSunFill } from 'react-icons/bs'
import { MdNightlight } from 'react-icons/md'
import { useGlobalContext } from '../context/stateContext'
import { Cart } from './'
const Navbar = ({handleTheme, theme}) => {
  const {totalQuantities, setShowCart, showCart} = useGlobalContext()
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Sound Hardware</Link>
      </p>
      <button onClick={handleTheme} 
        className={`themeBtn ${theme === 'light-theme' ? 'light-theme':'dark-theme'}`}>
        {theme === 'light-theme' ? <MdNightlight/> : <BsFillSunFill/>}
      </button>
      <button className="cart-icon" type="button" 
        onClick={() => setShowCart(prev => !prev)}>
        <AiOutlineShopping/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      { showCart && <Cart/>}
    </div>
  )
}

export default Navbar