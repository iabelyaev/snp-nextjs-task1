import { storiesCard } from 'stubs/stories';

import Card from 'components/Card';
import Title from 'components/Title';
import Container from 'components/Container';

import s from './Stories.module.scss';

const Stories = () => {
  return (
    <section className={s.stories} id="story">
      <Container>
        <Title title="Истории путешествий" className={s.wrapperTitle} />

        <ul className={s.list}>
          {storiesCard.map((card, index) => (
            <li key={index}>
              <Card info={card} className={s.card} width={1170} height={567} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Stories;
