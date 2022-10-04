import styles from './FavButton.module.css';
import HeartFilledSVG from '../../../public/assets/iconmonstr-favorite-3.svg';
import HollowHeartSVG from '../../../public/assets/iconmonstr-favorite-2.svg';
import { useFavButtonContext } from '../../context/customContext';
import { IFavButton } from '../../global/interfaces';

export const FavButton: React.FC<IFavButton> = ({ cardItem, fav }) => {
  const {
    favList: { dispatch },
  } = useFavButtonContext();
  return (
    <button
      className={styles['fav-button']}
      onClick={() => dispatch(cardItem, !fav)}
    >
      <img
        title="heartIcon"
        className={styles.heart}
        src={fav ? HeartFilledSVG : HollowHeartSVG}
      />
    </button>
  );
};
