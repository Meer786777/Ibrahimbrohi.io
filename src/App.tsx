// In App.js
import React from 'react';
import Home from './components/Header';
import './App.css'
import Body from './components/Body';
const App = () => {
    return (
        <>
            <div className='holder'>
                <Home />
                <Body/>
            </div>
        </>

    );
};

export default App;
