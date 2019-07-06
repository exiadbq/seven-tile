import React from 'react';
import './App.css';
import Tile from './Tile';
import GlobalStyle from './GlobalStyle';
import tile from './assets/tile.jpg';

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Tile title={'Home and Away'} src={tile}/>
      </main>
    </>
  );
}

export default App;
