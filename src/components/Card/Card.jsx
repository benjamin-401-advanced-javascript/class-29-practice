import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.jsx';

export default function card(props) {
  return (
    <>
      <Header />

      <div className="card">
        <header><h3>{props.cardData.title}</h3></header>
        <div className="content">{props.cardData.copy}</div>
        <figure>
          <img src={props.cardData.media.href} alt={props.cardData.media.alt} />
          <figcaption>{props.cardData.media.title}</figcaption>
        </figure>
        <nav className="links">
          <ul>

            {props.cardData.links.map((link, k) => (
              <li key={k}>
                <a className={link.type} href={link.href} title={link.title}>
                  {link.title}
                </a>
              </li>
            ))}

          </ul>
        </nav>
      </div>

    </>
  );
}
card.displayName = 'Card';
card.propTypes = {
  cardData: PropTypes.object,
};
