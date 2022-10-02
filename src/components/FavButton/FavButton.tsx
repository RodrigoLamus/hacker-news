import styles from './FavButton.module.css';
import HeartFilledSVG from '../../../public/assets/iconmonstr-favorite-3.svg';
import HollowHeartSVG from '../../../public/assets/iconmonstr-favorite-2.svg';
import { useFavButtonContext } from '../../context/customContext';
import { CardInterface } from '../../interfaces';

export const FavButton: React.FC<{ cardItem: CardInterface; fav: boolean }> = ({
  cardItem,
  fav,
}) => {
  const { dispatchFavList } = useFavButtonContext();
  return (
    <button
      className={styles['fav-button']}
      onClick={() => dispatchFavList(cardItem, !fav)}
    >
      <img
        title="heartIcon"
        className={styles.heart}
        src={fav ? HeartFilledSVG : HollowHeartSVG}
      />
    </button>
  );
};
