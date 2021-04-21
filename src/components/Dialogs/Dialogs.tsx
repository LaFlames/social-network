import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {
    ActionsType,
    DialogsPageType,
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/state";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsType) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    console.log(props)

    let dialogElements = props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message} id={m.id}/>)

    const onUpdateMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value
        props.dispatch(updateNewMessageTextActionCreator(message))
    }
    const onAddMessage = () => {
        if (props.dialogsPage.newMessageValue !== "") {
            props.dispatch(sendMessageActionCreator())
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea
                        value={props.dialogsPage.newMessageValue}
                        onChange={onUpdateMessageBody}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onAddMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs