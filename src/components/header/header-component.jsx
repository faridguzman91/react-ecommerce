import React from 'react';
import { Link } from 'react-router-dom'
import './header.styles.scss'

import Logo from '../../assets/hanger.png'

const Header = () => (
    <div className='header'>

        <Link to="/" className='logo-container' >
            {/* <Logo/> */}
            Logo
            

        </Link>

        <div className='options'>

            <Link className='option' to='/shop'>
                SHOP
            </Link>

             <Link className='option' to='/contact'>
                CONTACT
            </Link>

        </div>
    </div>
)

export default Header