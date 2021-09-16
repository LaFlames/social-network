import React from "react";
import {MessageType} from "../../../redux/DialogsReducer";


const Message: React.FC<MessageType> = (props) => {

    return (
        <div className="">
            {props.message}
        </div>
    )
}

export default Message