import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hijo from './components/Hijo';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        h1 > Esta es un proyecto para contribuir en Github < /h1> < /
        header > <
        Hijo nombre = { 'Kike' }
        /> < /
        div >
    );
}

export default App;