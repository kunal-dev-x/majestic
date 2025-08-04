import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import ProductGrid from '../components/Products/ProductGrid';
import ReviewsSection from '../components/Home/ReviewsSection';
import FeaturedOutfits from '../components/Home/FeaturedOutfits';
import { products } from '../data/mockData';
import styles from './Home.module.css';

const Home = () => {
  const newArrivals = products.filter(product => product.isNew);
  const bestSellers = products.filter(product => product.isBestSeller);

  return (
    <div className={styles.home}>
      <HeroSection />
      
      <section className={styles.section} aria-labelledby="new-arrivals-heading">
        <div className="container">
          <h2 id="new-arrivals-heading" className={styles.sectionTitle}>New Arrivals</h2>
          <ProductGrid products={newArrivals} />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="best-sellers-heading">
        <div className="container">
          <h2 id="best-sellers-heading" className={styles.sectionTitle}>Best Sellers</h2>
          <ProductGrid products={bestSellers} />
        </div>
      </section>

      <FeaturedOutfits />
      <ReviewsSection />
    </div>
  );
};

export default Home;
