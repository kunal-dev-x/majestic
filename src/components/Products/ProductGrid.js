import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

const ProductGrid = ({ products, columns = 4 }) => {
  if (!products || products.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div className={`${styles.grid} ${styles[`columns${columns}`]}`}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
