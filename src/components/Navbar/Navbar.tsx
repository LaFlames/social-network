import React from "react";
import { NavLink } from "react-router-dom";
import styles from './navBar.module.css';


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <NavLink className={styles.link} to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink className={styles.link} to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div>
                <a className={styles.link} href="#">News</a>
            </div>
            <div>
                <NavLink className={styles.link} to="/music" activeClassName={styles.activeLink}>Music</NavLink>
            </div>
            <div>
                <a className={styles.link} href="#">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;