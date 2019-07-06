import React from 'react';
import './App.css';
import Tile from './Tile';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Tile title={'Home and Away'}/>
      </main>
    </>
  );
}

export default App;
