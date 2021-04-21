import React from "react";
import {MessageType} from "./../../../redux/state"


const Message: React.FC<MessageType> = (props) => {

    return (
        <div className="">
            {props.message}
        </div>
    )
}

export default Message