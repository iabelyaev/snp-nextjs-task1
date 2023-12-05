import Image from 'next/image';
import Container from "components/Container/Container";
import styles from './offers.module.scss';

export default function Offers() {
  return (
    <section className={styles.offers}>
      <Container>
        <div className={styles.offers__wrapper}>
          <div className={styles.offers__text}>
            <h2 className={styles.offers__title}>
              Пора в путешествие вместе с нами!
            </h2>
            <p className={styles.offers__description}>
              Напиши на почту и узнай подробности <br />
              на <a href="mailto:yourtour@gmail.com">yourtour@gmail.com</a>
            </p>
          </div>
          <Image
            src="/images/footer-photo.jpg"
            alt="Фотография"
            width={370}
            height={370}
          />
        </div>
      </Container>
    </section>
  );
}
