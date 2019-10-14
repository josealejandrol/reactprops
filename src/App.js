import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hijo from './components/Hijo';
import Menu from './components/Menu';
import Imagen from './components/Imagen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Estos son unas pruebas en react...</h1>
      </header>
      <Hijo nombre={'Jose Alejandro TeamBlack'} />
      <Menu item1={'Mi perfil'} item2={'Quien Soy'} item3={'Donde estudie'}/>
      <Imagen image={require('./Images/perfil.jpg')} title={'Curriculum vitae'}
        contenido={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc erat urna, rutrum id efficitur sit amet, interdum ut ex. Duis venenatis eget magna quis volutpat. Nunc fermentum dolor nec justo placerat, sed maximus mauris viverra. Maecenas porta libero ac lacus molestie, vulputate dignissim velit tincidunt. Etiam finibus ipsum eget sapien faucibus porta. Etiam pretium nibh ligula, eget aliquam mi dignissim nec. In euismod urna vitae erat semper, et auctor turpis vulputate. Nam gravida nunc eu vulputate vestibulum. Vestibulum ut posuere ante. Proin vitae egestas ante, non consequat erat. Quisque vitae facilisis orci, eu varius metus.'}
      />
    </div>
  );
}

export default App;
