import React, {ComponentType} from "react";
import {DialogsInitialStateType, sendMessage} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux"

type MapStatePropsType = {
    dialogsPage: DialogsInitialStateType
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


export default compose<ComponentType>(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs)


