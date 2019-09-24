import React from 'react';
import { Route } from 'react-router-dom';

import About from '../About/About.jsx';
import Header from '../Header/Header.jsx';
import Deck from '../Deck/Deck.jsx';
import content from '../../content.json';


import If from '../If/If';

import './App.css';

function App() {

  return (
    <>
      <Header />
      <Route exact path="/about" component={About} />
      {content.map((deck, i) => (
        <Deck key={i} deckData={deck} />
      ))}
    </>
  );
}

export default App;
