import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";



let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                dialogsPage={store.getDialogsState()}
                profilePage={store.getProfileState()}
                addPost={store._addPost.bind(store)}
                updateNewPostText={store._updateNewPostText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree);





