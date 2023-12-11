import Image from 'next/image';

import Container from 'components/Container';

import s from './Offers.module.scss';

const Offers = () => {
  return (
    <section className={s.offers}>
      <Container>
        <div className={s.offers__wrapper}>
          <div className={s.offers__text}>
            <h2 className={s.offers__title}>
              Пора в путешествие вместе с нами!
            </h2>
            <p className={s.offers__description}>
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
};

export default Offers;
