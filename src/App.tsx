import React, { useState } from 'react';
import './App.scss';
import LOGO from './assets/images/LOGO.svg';
import EARTH_SVG from './images/EARTH.svg';
import RocketIcon from './images/rocket.svg';
import CartIcon from './images/cart.svg';
import { Button } from './components/Button';

function App() {
// State to control the visibility of the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <div className='container'>
        <header className="header">
          <div className="header__container">
            <img src={LOGO} alt="Logo da empresa" className="header__logo" />
            <nav className="header__nav">
              <a href="#home" className="header__link">Home</a>
              <a href="#products" className="header__link">Products</a>
              <a href="#cart" className="header__icon">
                <div className="cart-icon" />
              </a>
            </nav>
          </div>
        </header>


      <section className="hero" id="home">
        <div className="hero__content">
          <h1 className="hero__title">Discover the vast expanses of <span className="hero__title--highlighted">space</span></h1>
          <p className="hero__subtitle">Where the possibilities are <span className="hero__subtitle--highlighted">endless!</span></p>
          <Button className="hero__button">Learn more</Button>
        </div>
        <div className="hero__image-container">
          <img
            src={EARTH_SVG}
            alt="Stylized globe"
            className="hero__image"
          />
        </div>
      </section>

      <section className="offers" id="products">
        <h2 className="offers__title">Offers</h2>
        <div className="offers__grid">
          {/* Offer cards. Background images will be set in App.scss */}
          <div className="offer-card offer-card--1">
            <h3 className="offer-card__title">Move the borders of reality!</h3>
            <p className="offer-card__description">Go on a space adventure - It's possible with us!</p>
            <div className="offer-card__button-wrapper">
            <button className="offer-card__button">Learn more</button>
            </div>
          </div>

          <div className="offer-card offer-card--2">
            <h3 className="offer-card__title--intermed">Space is not just stars and planets</h3>
            <p className="offer-card__description--intermed">Go on a space adventure</p>
             <div className="offer-card__button-wrapper">
            <button className="offer-card__button">Learn more</button>
          </div>
          </div>

          <div className="offer-card offer-card--3">
            <h3 className="offer-card__title--intermed">For those who dream of stars</h3>
            <p className="offer-card__description--intermed">Our offer: make your dream come true</p>
             <div className="offer-card__button-wrapper">
            <button className="offer-card__button">Learn more</button>
            </div>
          </div>

          <div className="offer-card offer-card--full-width offer-card--4">
            <h3 className="offer-card__title">Fulfill your fantastic dreams</h3>
            <p className="offer-card__description">Space has never been so close</p>
             <div className="offer-card__button-wrapper">
            <button className="offer-card__button">Learn more</button>
            </div>
          </div>
        </div>
      </section>

<section className="journey-description" id="company">
  <h2 className="journey-description__title">Embark on a space journey</h2>

  <input type="checkbox" id="readmore-toggle" className="readmore-checkbox" />
  
  <p className="journey-description__text">
    Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. 
    And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. 
    <span className="extra-text">
      {' '}We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. 
      We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. 
      Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. 
      We offer various options for space excursions.
    </span>
  </p>

  <label htmlFor="readmore-toggle" className="journey-description__read-more"></label>
</section>

      <footer className="footer">
        <img src={RocketIcon} alt="Rocket icon" className="footer__icon" />
        <p className="footer__text">Exciting space adventure!</p>
      </footer>
    </div>
    </div>
  );
}

export default App;
