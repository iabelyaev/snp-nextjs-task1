import Container from 'components/Container';

import s from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={s.hero}>
      <Container>
        <div className={s.wrapper}>
          <h1 className={s.title}>Идеальные путешествия существуют</h1>
          <p className={s.description}>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </p>
          <a className={s.link} href="/">
            Найти тур
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
