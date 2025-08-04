import React from 'react';
import { reviews } from '../../data/mockData';
import styles from './ReviewsSection.module.css';

const ReviewsSection = () => {
  return (
    <section className={styles.reviews} aria-labelledby="reviews-heading">
      <div className="container">
        <h2 id="reviews-heading" className={styles.title}>What Our Customers Say</h2>
        
        <div className={styles.reviewsGrid}>
          {reviews.map(review => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <img src={review.image} alt={review.name} className={styles.avatar} />
                <div className={styles.reviewInfo}>
                  <h3>{review.name}</h3>
                  <div className={styles.rating}>
                    {'★'.repeat(review.rating)}
                  </div>
                </div>
              </div>
              
              <p className={styles.comment}>{review.comment}</p>
              
              {review.verified && (
                <span className={styles.verified}>✓ Verified Purchase</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
