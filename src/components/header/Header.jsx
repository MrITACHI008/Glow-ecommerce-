import React from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png';
import {RiShoppingCartLine} from 'react-icons/ri';

const Header = () => {
  return (
    <div className={css.container} >
        <div className={css.logo} >
                <img  src={Logo} alt=""/>
                <span>Glow</span>
          </div>
        <div className={css.right}>
          <div className={css.menu}>
              <ul className={css.menu}>
                  <li>Collections</li>
                  <li>Brands</li>
                  <li>new</li>
                  <li>Sales</li>
                  <li>ENG</li>
              </ul>
          </div>
          
          <input placeholder='Search..' type="text" className={css.search} />

          <RiShoppingCartLine className={css.cart}/>
        </div>
        
    </div>
  )
}

export default Header;