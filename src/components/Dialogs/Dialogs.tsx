import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import { DialogsPageType } from "../../redux/state";




type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateMessageBody: (text: string) => void,
    addMessage: () => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message} id={m.id}/>)

    const onUpdateMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessageBody(e.currentTarget.value)
    }
    const onAddMessage = () => {
        if (props.dialogsPage.newMessageValue !== "") {
            props.addMessage()
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