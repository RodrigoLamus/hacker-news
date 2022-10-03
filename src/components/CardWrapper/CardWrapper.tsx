import { Card } from '../Card/Card';
import styles from './CardWrapper.module.css';
import { CardInterface } from '../../interfaces';
import { useCardWrapperContext } from '../../context/customContext';
import { useEffect, useState } from 'react';

export const CardWrapper: React.FC<{
  cardList: CardInterface[];
}> = ({ cardList }) => {
  const { favList, activeTab } = useCardWrapperContext();

  const cardToRender = (card: CardInterface, index: number) => {
    return (
      <Card
        key={card.id + index}
        card={card}
        fav={favList.some((elem) => elem.id === card.id)}
      />
    );
  };

  const listToRender = activeTab
    ? cardList.map((card, i) => cardToRender(card, i))
    : favList.map((card, i) => cardToRender(card, i));

  return (
    <div className={styles['outer-wrapper']}>
      <div role="table" className={styles['wrapper']}>
        {listToRender}
      </div>
    </div>
  );
};
