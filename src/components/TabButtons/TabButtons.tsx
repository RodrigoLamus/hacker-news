import React from 'react';
import { useTabButtonsContext } from '../../context/customContext';
import styles from './TabButtons.module.css';

export const TabButtons: React.FC = () => {
  const {
    tab: { state, dispatch },
  } = useTabButtonsContext();

  return (
    <div
      role="tab"
      className={`${styles.wrapper} ${!state ? styles['fav-page'] : ''}`}
    >
      <button
        className={`${styles['fav-button']} ${state ? styles.active : ''}`}
        onClick={() => dispatch(true)}
      >
        All
      </button>
      <button
        className={`${styles['fav-button']} ${!state ? styles.active : ''}`}
        onClick={() => dispatch(false)}
      >
        My faves
      </button>
    </div>
  );
};
