import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import {AuthInitialStateType} from "../../redux/AuthReducer";

type HeaderPropsType = {
    data: AuthInitialStateType
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.headerLogo}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzUSIowE4cZwKLzuDHzDApKHo5BJTAXaMBw&usqp=CAU"
                    alt=""/>
                { props.data.isAuth ? <h2>{props.data.login}</h2> : <NavLink to="/login">Login</NavLink>}
            </div>
            <div className={s.headerLinks}>
                <ul className="list">
                    <li className="list_item"><NavLink to="/news">News</NavLink></li>
                    <li className="list_item"><NavLink to="/home">Home</NavLink></li>
                    <li className="list_item"><NavLink to="/settings">Account Settings</NavLink></li>
                    <li className="list_item"><NavLink to="/leave">Leave</NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;