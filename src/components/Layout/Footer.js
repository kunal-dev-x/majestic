import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Shop</h3>
            <ul>
              <li><Link to="/women">Women</Link></li>
              <li><Link to="/men">Men</Link></li>
              <li><Link to="/sale">Sale</Link></li>
              <li><Link to="/new-arrivals">New Arrivals</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Customer Care</h3>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/size-guide">Size Guide</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Connect</h3>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Pinterest">Pinterest</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 Majestic. All rights reserved.</p>
          <p className={styles.attribution}>Made by Kunal and Divyanshu not by Sujal. For more updates contact us on GitHub.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
