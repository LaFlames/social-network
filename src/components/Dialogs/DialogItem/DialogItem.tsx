import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css';
import {DialogItemType} from "../../../redux/DialogsReducer";


const DialogItem: React.FC<DialogItemType> = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem