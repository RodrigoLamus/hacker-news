import React from 'react';
import styles from './TabButtons.module.css';

export const TabButtons = () => {
  return (
    <div role="tab" className={styles.wrapper}>
      <button className={`${styles['fav-button']} ${styles.active}`}>
        All
      </button>
      <button className={`${styles['fav-button']}`}>My faves</button>
    </div>
  );
};
