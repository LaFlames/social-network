import React from "react";
import {DialogsInitialStateType, sendMessage, updateNewMessageText} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    dialogsPage: DialogsInitialStateType
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, sendMessage}) (Dialogs)


export default DialogsContainer