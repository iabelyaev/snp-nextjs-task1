import { reviews } from 'stubs/reviews';

import Title from 'components/Title';
import Container from 'components/Container';

import Card from './Card';

import s from './Reviews.module.scss';

const Reviews = () => {
  return (
    <section className={s.reviews} id="reviews">
      <Container>
        <Title className={s.wrapper} title={`Отзывы нашиx\nпутешественников`} />

        <ul className={s.list}>
          {reviews.map((card, index) => (
            <li key={index}>
              <Card
                text={card.text}
                author={card.userInfo.author}
                title={card.userInfo.titleTour}
                img={card.userInfo.img}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Reviews;
