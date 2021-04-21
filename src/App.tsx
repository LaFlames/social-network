import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsType, DialogsPageType, ProfilePageType} from "./redux/state";


type AppPropsType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}


const App: React.FC<AppPropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogsPage={props.dialogsPage}
                        dispatch={props.dispatch}
                    />} />
                    <Route path="/profile" render={() => <Profile
                        profilePage={props.profilePage}
                        dispatch={props.dispatch}
                    />} />
                    <Route path="/music" component={Music} />
                </div>
            </div>;
        </BrowserRouter>)
}

export default App;
