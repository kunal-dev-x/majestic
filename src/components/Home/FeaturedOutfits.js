import React from 'react';
import { Link } from 'react-router-dom';
import { featuredOutfits } from '../../data/mockData';
import styles from './FeaturedOutfits.module.css';

const FeaturedOutfits = () => {
  return (
    <section className={styles.outfits} aria-labelledby="outfits-heading">
      <div className="container">
        <h2 id="outfits-heading" className={styles.title}>Featured Outfits</h2>
        <p className={styles.subtitle}>Complete looks styled by our experts</p>
        
        <div className={styles.outfitsGrid}>
          {featuredOutfits.map(outfit => (
            <div key={outfit.id} className={styles.outfitCard}>
              <div className={styles.imageContainer}>
                <img src={outfit.image} alt={outfit.title} />
                <div className={styles.overlay}>
                  <div className={styles.outfitInfo}>
                    <h3>{outfit.title}</h3>
                    <p>{outfit.description}</p>
                    <Link to="#" className="btn">Shop the Look</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOutfits;
