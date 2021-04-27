import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsType} from "./redux/redux-store";
import {AppStateType} from "./redux/redux-store";
import DialogsContainer from './components/Dialogs/DialogsContainer';


type AppPropsType = {
    state: AppStateType
    dispatch: (action: ActionsType) => void
}


const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer/>} />
                    <Route path="/profile" render={() => <Profile/>} />
                    <Route path="/music" component={Music} />
                </div>
            </div>;
        </BrowserRouter>)
}

export default App;
