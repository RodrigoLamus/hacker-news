import { CardInterface } from '../../global/interfaces';
import styles from './InfoTag.module.css';
import WatchSVG from '../../../public/assets/iconmonstr-time-2.svg';

export const InfoTag: React.FC<CardInterface> = ({
  title,
  author,
  createdAt,
  url,
}) => {
  const openLink = () => {
    const openedWindow = window.open(url);
    openedWindow?.focus();
  };

  return (
    <div onClick={openLink} className={styles.info}>
      <ul>
        <li className={styles['extra-info']}>
          <img className={styles.watch} src={WatchSVG} alt="watch" />
          {`${createdAt.getMinutes()}min ago by ${author}`}
        </li>
        <li className={styles['main-info']}>{title}</li>
      </ul>
    </div>
  );
};
