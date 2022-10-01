import React from 'react';
import { useTabButtonsContext } from '../../context/customContext';
import styles from './TabButtons.module.css';

export const TabButtons = () => {
  const { dispatchTab, activeTab } = useTabButtonsContext();

  return (
    <div role="tab" className={styles.wrapper}>
      <button
        className={`${styles['fav-button']} ${activeTab ? styles.active : ''}`}
        onClick={() => dispatchTab(true)}
      >
        All
      </button>
      <button
        className={`${styles['fav-button']} ${!activeTab ? styles.active : ''}`}
        onClick={() => dispatchTab(false)}
      >
        My faves
      </button>
    </div>
  );
};
