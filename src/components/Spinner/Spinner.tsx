import styles from './Spinner.module.css';

export const Spinner: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
