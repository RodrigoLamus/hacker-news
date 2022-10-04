import { Card } from '../Card/Card';
import styles from './CardWrapper.module.css';
import { CardInterface } from '../../interfaces';
import { useCardWrapperContext } from '../../context/customContext';

export const CardWrapper: React.FC<{
  cardList: CardInterface[];
}> = ({ cardList }) => {
  const {
    favList: { state: favListState },
    tab: { state: tabState },
  } = useCardWrapperContext();

  const cardToRender = (card: CardInterface, index: number) => {
    return (
      <Card
        key={card.id + index}
        card={card}
        fav={favListState.some((elem) => elem.id === card.id)}
      />
    );
  };

  const listToRender = tabState
    ? cardList.map((card, i) => cardToRender(card, i))
    : favListState.map((card, i) => cardToRender(card, i));

  return (
    <div className={styles['outer-wrapper']}>
      <div role="table" className={styles['wrapper']}>
        {listToRender}
      </div>
    </div>
  );
};
