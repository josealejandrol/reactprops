import React from 'react';
import './App.css';
import Hijo from './components/Hijo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Este es un proyecto para contribuir en Github en NodSchool</h1>
        
      </header>
      
      <Hijo nombre={'José'} proyecto ={'Pruebas en GitHub'}/>
      
    </div>
  );
}

export default App;
