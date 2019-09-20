import React from 'react';
import PropTypes from 'prop-types';
import Deck from './Deck/Deck.jsx';

class Page extends React.Component {
  render() {
    const content = this.props.content || [];

    return (
      <>
        {content.map((deck, i) => (
          <Deck key={i} deckData={ deck } />
        ))}
      </>
    );
  }
}

Page.propTypes = {
  content: PropTypes.array,
};

export default Page;
