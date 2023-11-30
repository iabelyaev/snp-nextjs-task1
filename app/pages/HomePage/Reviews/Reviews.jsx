import Image from 'next/image';
import Title from 'components/Title/Title';
import { reviewCards } from '../../../utils/mock';

import styles from './reviews.module.scss';
export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className="container">
        <Title
          cN={styles.reviews__wrapper}
          title={`Отзывы нашиx\nпутешественников`}
        />

        <div className={styles.reviews__list}>
          {reviewCards.map((card, index) => {
            return (
              <article className={styles.card_reviews} key={index}>
                <p className={styles.card_reviews__text}>{card.text}</p>

                <div className={styles.card_reviews__footer}>
                  <h3>{card.userInfo.author}</h3>
                  <p>`Тур: {card.userInfo.titleTour}`</p>
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
      </div>
    </section>
  );
}
