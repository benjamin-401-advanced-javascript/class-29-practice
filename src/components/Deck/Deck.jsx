import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.jsx';
import Card from '../Card/Card.jsx';

export default function deck(props) {
  return (
    <>
      <Header />

      <section className="deck">
        <header><h2>{props.deckData.title}</h2></header>

        {props.deckData.records.map((card, i) => (
          <Card key={i} cardData={card} />
        ))}

      </section>
    </>
  );
}
deck.displayName = 'Deck';
deck.propTypes = {
  deckData: PropTypes.object,
};
