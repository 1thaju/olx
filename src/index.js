import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context, { FirebaseContext } from './store/Context';
import { firebase } from './Components/firebase/config';
import ItemStore from './Components/ProductDetails';

ReactDOM.render(
    <FirebaseContext.Provider value={firebase}>
        
        <Context>
        <App />
        </Context>
       
    </FirebaseContext.Provider>
,
    document.getElementById('root')
);
