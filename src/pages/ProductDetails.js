import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/mockData';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className={styles.notFound}>
        <div className="container">
          <h1>Product not found</h1>
          <p>The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.productDetails}>
      <div className="container">
        <div className={styles.productGrid}>
          <div className={styles.imageSection}>
            <img src={product.images[0]} alt={product.name} />
          </div>
          
          <div className={styles.infoSection}>
            <h1>{product.name}</h1>
            <div className={styles.price}>
              <span className={styles.currentPrice}>${product.price}</span>
              {product.originalPrice && (
                <span className={styles.originalPrice}>${product.originalPrice}</span>
              )}
            </div>
            
            <div className={styles.rating}>
              <span>★★★★★ ({product.reviews} reviews)</span>
            </div>
            
            <p className={styles.description}>{product.description}</p>
            
            <div className={styles.options}>
              <div className={styles.sizes}>
                <h3>Size</h3>
                <div className={styles.sizeGrid}>
                  {product.sizes.map(size => (
                    <button key={size} className={styles.sizeButton}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className={styles.colors}>
                <h3>Color</h3>
                <div className={styles.colorGrid}>
                  {product.colors.map(color => (
                    <button key={color} className={styles.colorButton}>
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.actions}>
              <button className="btn">Add to Cart</button>
              <button className="btn btn-outline">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
