import styles from './Header.module.css';

interface IHeader {
  title: string;
}

export const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <header className={styles.header}>
      <span className={styles['HACKER-NEWS']}>{title.toUpperCase()}</span>
    </header>
  );
};
