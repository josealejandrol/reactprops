import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hijo from './components/Hijo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Estos son unas pruebas en react...</h1>
      </header>
      <Hijo nombre={'José es mi perra'} />
    </div>
  );
}

export default App;
