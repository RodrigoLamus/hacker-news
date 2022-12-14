import { InfoTag } from '../InfoTag/InfoTag';
import styles from './Card.module.css';
import React, { useEffect, useState } from 'react';
import { ICard } from '../../global/interfaces';
import { FavButton } from '../FavButton/FavButton';

export const Card: React.FC<ICard> = ({ card, fav }) => {
  const [transition, setTransition] = useState('');

  useEffect(() => {
    setTransition('tran');

    return () => {
      setTransition('');
    };
  }, []);
  return (
    <div className={`${styles.card} ${styles[transition]}`} key={card.id}>
      <InfoTag
        id={card.id}
        createdAt={card.createdAt}
        author={card.author}
        title={card.title}
        url={card.url}
      />
      <FavButton cardItem={card} fav={fav} />
    </div>
  );
};
