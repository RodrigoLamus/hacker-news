import Lottie from 'react-lottie';
import * as noFavAnimationData from './noFavorites/noFavoritesLottie.json';
import * as searchAnimationData from './search/searchLottie.json';
import styles from './Animation.module.css';
import { IAnimation } from '../../global/interfaces';

const jsonType = (type: string) => {
  switch (type) {
    case 'search':
      return searchAnimationData;
    case 'noFavorites':
      return noFavAnimationData;
    default:
      return {};
  }
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: {},
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const Animation: React.FC<IAnimation> = ({
  type,
  height,
  width,
  title,
}) => {
  defaultOptions.animationData = jsonType(type);

  return (
    <div className={styles['lottie-container']}>
      {title && <p>{title}</p>}
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
        isPaused={false}
        isStopped={false}
      />
    </div>
  );
};
