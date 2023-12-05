import Image from 'next/image';
import Title from 'components/Title/Title';
import {reviews} from "stubs/reviews";
import Container from "components/Container/Container";

import styles from './reviews.module.scss';
export default function Reviews() {
  return (
    <section className={styles.reviews} id="reviews">
      <Container>
        <Title
            className={styles.wrapper}
            title={`Отзывы нашиx\nпутешественников`}
        />

        <div className={styles.list}>
            {reviews.map((card, index) => {
              return (
                <article className={styles.card} key={index}>
                  <p className={styles.reviewsText}>{card.text}</p>

                  <div className={styles.reviewsFooter}>
                    <h3>{card.userInfo.author}</h3>
                    <p>Тур: {card.userInfo.titleTour}</p>
                    <Image
                      src={card.userInfo.img}
                      alt={card.userInfo.author}
                      width={75}
                      height={75}
                    />
                  </div>
                </article>
              );
            })}
          </div>
      </Container>
    </section>
  );
}
