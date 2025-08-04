import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero} role="banner" aria-label="Shop men's and women's clothing">
      <div className={styles.heroSplit}>
        <div className={styles.heroHalf}>
          <div 
            className={styles.heroImage}
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=600&fit=crop)'
            }}
          >
            <div className={styles.heroOverlay}>
              <div className={styles.heroContent}>
                <h2>Women's Collection</h2>
                <p>Discover the latest trends in women's fashion</p>
                <Link to="/women" className="btn">Shop Women</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroHalf}>
          <div 
            className={styles.heroImage}
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop)'
            }}
          >
            <div className={styles.heroOverlay}>
              <div className={styles.heroContent}>
                <h2>Men's Collection</h2>
                <p>Elevate your style with premium menswear</p>
                <Link to="/men" className="btn">Shop Men</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
