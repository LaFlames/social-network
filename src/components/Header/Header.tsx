import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerLogo}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzUSIowE4cZwKLzuDHzDApKHo5BJTAXaMBw&usqp=CAU"
                    alt=""/>
                <h2>yourself</h2>
            </div>
            <div className={s.headerLinks}>
                <ul className="list">
                    <li className="list_item"><NavLink to="/Home">Home</NavLink></li>
                    <li className="list_item"><NavLink to="/Account Settings">Account Settings</NavLink></li>
                    <li className="list_item"><NavLink to="/Enemies">Enemies</NavLink></li>
                    <li className="list_item"><NavLink to="/Leave">Leave</NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;