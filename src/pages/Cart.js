import React from 'react';
import { useGlobal } from '../context/GlobalContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { state } = useGlobal();

  if (state.cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className="container">
          <h1>Your Cart is Empty</h1>
          <p>Add some items to get started!</p>
        </div>
      </div>
    );
  }

  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className={styles.cart}>
      <div className="container">
        <h1>Shopping Cart</h1>
        
        <div className={styles.cartItems}>
          {state.cart.map((item, index) => (
            <div key={`${item.id}-${item.size}`} className={styles.cartItem}>
              <img src={item.images[0]} alt={item.name} />
              <div className={styles.itemInfo}>
                <h3>{item.name}</h3>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
                <p className={styles.itemPrice}>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.cartSummary}>
          <h2>Total: ${total.toFixed(2)}</h2>
          <button className="btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
