import {reviews} from "stubs/reviews";

import Title from 'components/Title/Title';
import Container from "components/Container/Container";

import Card from './Card/Card';

import styles from './Reviews.module.scss';

const Reviews = () => {
  return (
    <section className={styles.reviews} id="reviews">
      <Container>
        <Title
            className={styles.wrapper}
            title={`Отзывы нашиx\nпутешественников`}
        />

        <ul className={styles.list}>
            {reviews.map((card, index) =>
              <li key={index}>
                <Card
                  text={card.text}
                  author={card.userInfo.author}
                  title={card.userInfo.titleTour}
                  img={card.userInfo.img}
                />
              </li>
            )}
        </ul>
      </Container>
    </section>
  );
}

export default Reviews;
