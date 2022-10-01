import styles from './FavButton.module.css';
import HeartFilledSVG from '../../../public/assets/iconmonstr-favorite-3.svg';
import HollowHeartSVG from '../../../public/assets/iconmonstr-favorite-2.svg';

export const FavButton: React.FC<{ fav: boolean }> = ({ fav }) => {
  return (
    <button className={styles['fav-button']}>
      <img
        title="heartIcon"
        className={styles.heart}
        src={fav ? HeartFilledSVG : HollowHeartSVG}
      />
    </button>
  );
};
