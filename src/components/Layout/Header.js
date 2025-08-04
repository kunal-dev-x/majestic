import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGlobal } from '../../context/GlobalContext';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state } = useGlobal();
  const location = useLocation();

  const cartItemCount = state.cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = state.wishlist.length;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <Link to="/" className={styles.logo} aria-label="Majestic Home">
          <h1>MAJESTIC</h1>
        </Link>

        <nav className={styles.nav} role="navigation" aria-label="Main navigation">
          <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.navListOpen : ''}`}>
            <li>
              <Link 
                to="/women" 
                className={location.pathname === '/women' ? styles.active : ''}
              >
                Women
              </Link>
            </li>
            <li>
              <Link 
                to="/men"
                className={location.pathname === '/men' ? styles.active : ''}
              >
                Men
              </Link>
            </li>
            <li>
              <Link to="/sale">Sale</Link>
            </li>
            <li>
              <Link to="/new-arrivals">New</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link 
            to="/wishlist" 
            className={styles.iconButton}
            aria-label={`Wishlist (${wishlistCount} items)`}
          >
            <span className={styles.icon}>♡</span>
            {wishlistCount > 0 && <span className={styles.badge}>{wishlistCount}</span>}
          </Link>

          <Link 
            to="/cart" 
            className={styles.iconButton}
            aria-label={`Shopping cart (${cartItemCount} items)`}
          >
            <span className={styles.icon}>🛒</span>
            {cartItemCount > 0 && <span className={styles.badge}>{cartItemCount}</span>}
          </Link>

          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
