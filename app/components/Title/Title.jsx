import styles from './title.module.scss';
export default function Title({ title, isWrap, cN }) {
  return (
    <div className={`${styles.title__wrapper} ${cN ? cN : ''}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>
        Идейные соображения высшего порядка, {isWrap ? '\na' : 'a\n'} также
        рамки и место обучения кадров
      </p>
    </div>
  );
}
