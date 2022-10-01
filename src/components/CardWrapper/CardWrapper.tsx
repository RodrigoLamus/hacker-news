import { Card } from '../Card/Card';
import styles from './CardWrapper.module.css';
import { CardInterface } from '../../interfaces';

export const CardWrapper: React.FC<{
  cardList: CardInterface[];
}> = ({ cardList }) => {
  const cardToRender = (card: CardInterface) => {
    return <Card key={card.id} card={card} fav={false} />;
  };

  const listToRender = cardList.map((card) => cardToRender(card));

  return (
    <div className={styles['outer-wrapper']}>
      <div role="table" className={styles['wrapper']}>
        {listToRender}
      </div>
    </div>
  );
};
