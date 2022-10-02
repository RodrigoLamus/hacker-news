import { Card } from '../Card/Card';
import styles from './CardWrapper.module.css';
import { CardInterface } from '../../interfaces';
import { useCardWrapperContext } from '../../context/customContext';

export const CardWrapper: React.FC<{
  cardList: CardInterface[];
}> = ({ cardList }) => {
  const { favList, activeTab } = useCardWrapperContext();

  const cardToRender = (card: CardInterface) => {
    return (
      <Card
        key={card.id}
        card={card}
        fav={favList.some((elem) => elem.id === card.id)}
      />
    );
  };

  const listToRender = activeTab
    ? cardList.map((card) => cardToRender(card))
    : favList.map((card) => cardToRender(card));

  return (
    <div className={styles['outer-wrapper']}>
      <div role="table" className={styles['wrapper']}>
        {listToRender}
      </div>
    </div>
  );
};
