import React from 'react';
import { useGlobal } from '../context/GlobalContext';
import ProductGrid from '../components/Products/ProductGrid';
import styles from './Wishlist.module.css';

const Wishlist = () => {
  const { state } = useGlobal();

  if (state.wishlist.length === 0) {
    return (
      <div className={styles.emptyWishlist}>
        <div className="container">
          <h1>Your Wishlist is Empty</h1>
          <p>Save items you love to your wishlist!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wishlist}>
      <div className="container">
        <h1>My Wishlist</h1>
        <ProductGrid products={state.wishlist} />
      </div>
    </div>
  );
};

export default Wishlist;
