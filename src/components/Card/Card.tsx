import { InfoTag } from '../InfoTag/InfoTag';
import styles from './Card.module.css';
import React from 'react';
import { CardInterface } from '../../interfaces';
import { FavButton } from '../FavButton/FavButton';

export const Card: React.FC<{ card: CardInterface; fav: boolean }> = ({
  card,
  fav,
}) => {
  return (
    <div className={styles.card} key={card.id}>
      <InfoTag
        id={card.id}
        createdAt={card.createdAt}
        author={card.author}
        title={card.title}
        url={card.url}
      />
      <FavButton fav={fav} />
    </div>
  );
};
