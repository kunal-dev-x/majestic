import React from 'react';
import ProductGrid from '../components/Products/ProductGrid';
import { products } from '../data/mockData';
import styles from './Shop.module.css';

const ShopWomen = () => {
  const womenProducts = products.filter(product => product.gender === 'women');

  return (
    <div className={styles.shop}>
      <div className="container">
        <div className={styles.header}>
          <h1>Women's Collection</h1>
          <p>Explore elegant and stylish women's fashion</p>
        </div>
        
        <div className={styles.content}>
          <ProductGrid products={womenProducts} />
        </div>
      </div>
    </div>
  );
};

export default ShopWomen;
