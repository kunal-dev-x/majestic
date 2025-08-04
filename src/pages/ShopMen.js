import React from 'react';
import ProductGrid from '../components/Products/ProductGrid';
import { products } from '../data/mockData';
import styles from './Shop.module.css';

const ShopMen = () => {
  const menProducts = products.filter(product => product.gender === 'men');

  return (
    <div className={styles.shop}>
      <div className="container">
        <div className={styles.header}>
          <h1>Men's Collection</h1>
          <p>Discover premium menswear for every occasion</p>
        </div>
        
        <div className={styles.content}>
          <ProductGrid products={menProducts} />
        </div>
      </div>
    </div>
  );
};

export default ShopMen;
