import styles from './hero.module.scss';
import Container from "components/Container/Container";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Идеальные путешествия существуют
          </h1>
          <p className={styles.description}>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </p>
          <a className={styles.link} href="/">
            Найти тур
          </a>
        </div>
      </Container>
    </section>
  );
}
