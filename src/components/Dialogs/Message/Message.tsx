import React from "react";
import {MessageType} from "./../../../redux/state"


const Message: React.FC<MessageType> = (props) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
        alert(newMessageElement.current?.value)
    }

    return (
        <div className="">
            {props.message}
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>Send message</button>
        </div>
    )
}

export default Message