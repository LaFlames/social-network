import React from "react";
import {DialogsInitialStateType, sendMessage, updateNewMessageText} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: DialogsInitialStateType
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, sendMessage}) (AuthRedirectComponent)


