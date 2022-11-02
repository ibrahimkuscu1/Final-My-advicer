import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style/common.css" 
import "./style/chatroom.css"
import "./style/home.css"
import "./style/search.css"
import "mdb-react-ui-kit"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


