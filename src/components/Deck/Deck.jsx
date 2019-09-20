import React from 'react';
import PropTypes from 'prop-types';

export default function deck(props) {
  return (
    <>
      <section className="deck">
        <header><h2>{props.deckData.title}</h2></header>

        {props.deckData.records.map((card, j) => (
          <div key={j} className="card">
            <header><h3>{card.title}</h3></header>
            <div className="content">{card.copy}</div>
            <figure>
              <img src={card.media.href} alt={card.media.alt} />
              <figcaption>{card.media.title}</figcaption>
            </figure>
            <nav className="links">
              <ul>

                {card.links.map((link, k) => (
                  <li key={k}>
                    <a className={link.type} href={link.href} title={link.title}>
                      {link.title}
                    </a>
                  </li>
                ))}

              </ul>
            </nav>
          </div>
        ))}

      </section>
    </>
  );
}
deck.displayName = 'Deck';
deck.propTypes = {
  deckData: PropTypes.object,
};
