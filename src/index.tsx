import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, RootStateType, subscribe, updateNewPostText} from "./redux/state";



let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                dialogsPage={state.dialogsPage}
                profilePage={state.profilePage}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
subscribe(rerenderEntireTree);





