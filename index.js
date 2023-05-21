import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Text from './textEditor';
 import Header from './header';
 import Slidebar from './slidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='content'>
     <Header/> 
        <div className='horizontal'>
            <Text/>
        </div>
        <Slidebar/>
    </div>
);

reportWebVitals();
