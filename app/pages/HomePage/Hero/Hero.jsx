import styles from './hero.module.scss';
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__wrapper}>
          <h1 className={styles.hero__title}>
            Идеальные путешествия существуют
          </h1>
          <p className={styles.hero__description}>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </p>
          <a className={styles.hero__link} href="/">
            Найти тур
          </a>
        </div>
      </div>
    </section>
  );
}
