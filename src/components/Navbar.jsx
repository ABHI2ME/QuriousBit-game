import React , {useState}  from 'react' ;
import {  Link } from 'react-router-dom';

import styles from  './navbar.module.css' ;

const Navbar = () => {


    

  return (
    <>
       <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
                  <img src='../images/logo1.png' className={styles.navbarLogoImg} alt='logo'></img>
            </div> 
            <div className={styles.NavbarLinks}>
                  <div className={styles.navbarLinksHome}>
                    <Link to="/"  className={styles.navbaLinksHomeBtn}>Home</Link>
                   
                  </div>
                  <div className={styles.navbarLinksGames}>
                    <Link to = "/" className={styles.navbarLinksGamesBtn}>Games</Link>   
                  </div>
                  <div className={styles.navbarLinksAboutUs}>
                    <Link to="/"  className={styles.navbarLinksAboutUsBtn}>About</Link>
                   
                  </div>
                  
            </div>
   
       </div>
    </>
  )
}

export default Navbar
