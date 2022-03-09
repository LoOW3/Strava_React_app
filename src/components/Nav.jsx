import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './img/stravaLogo.png';
import s from './Nav.module.css'

export default function Nav(){
    return(
        <nav className={s.container}>
            <a href="https:/www.strava.com" className={s.logo}><img src={Logo} width="90px" /> </a>
            <div className={s.containerButtons}>
                <Link to='/' className={s.recent}>Recent Activities</Link>
                <Link to='/months' className={s.recent}>Monthly Activities</Link>
            </div>
        </nav>
    )
}