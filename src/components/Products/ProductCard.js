import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobal } from '../../context/GlobalContext';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { dispatch } = useGlobal();

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`} className={styles.imageLink}>
        <div className={styles.imageContainer}>
          <img src={product.images[0]} alt={product.name} />
          {product.isNew && <span className={styles.badge}>New</span>}
          {product.isBestSeller && <span className={styles.badgeBest}>Best Seller</span>}
        </div>
      </Link>
      
      <div className={styles.info}>
        <Link to={`/product/${product.id}`} className={styles.name}>
          {product.name}
        </Link>
        
        <div className={styles.price}>
          <span className={styles.currentPrice}>${product.price}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>${product.originalPrice}</span>
          )}
        </div>
        
        <div className={styles.rating}>
          <span>★★★★★</span>
          <span>({product.reviews})</span>
        </div>
        
        <div className={styles.actions}>
          <button 
            className={styles.wishlistBtn}
            onClick={handleAddToWishlist}
            aria-label="Add to wishlist"
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
