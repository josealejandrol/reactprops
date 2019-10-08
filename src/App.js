import React from 'react';
import './App.css';
import Hijo from './components/Hijo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Esta es un proyecto para contribuir en Github</h1>
      </header>
      <Hijo nombre={'José'} />
      <Footer/>
    </div>
  );
}

export default App;
