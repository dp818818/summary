import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

store.subscribe(()=>{
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
})