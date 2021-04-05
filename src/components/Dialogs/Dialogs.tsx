import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    console.log(props)

    let dialogElements = props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogElements}

            </div>
            <div className={s.messages}>

                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs