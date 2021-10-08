import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {DialogsInitialStateType} from "../../redux/DialogsReducer";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'


type DialogsPropsType = {
    dialogsPage: DialogsInitialStateType
    sendMessage: (message: string) => void
    isAuth: boolean
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message} id={m.id}/>)

    const onAddMessage = (formData: {message: string}) => {
        props.sendMessage(formData.message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <ReduxAddMessageForm onSubmit={onAddMessage}/>
            </div>
        </div>
    )
}

let AddMessageForm: React.FC<InjectedFormProps<{message: string}>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"message"} component={"textarea"} placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}
const ReduxAddMessageForm = reduxForm<{message: string}>({form: "addMessageForm"})(AddMessageForm)

export default Dialogs