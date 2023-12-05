import Card from 'components/Card/Card';
import Title from 'components/Title/Title';
import styles from './stories.module.scss';
import Container from "components/Container/Container";

import {storiesCard} from "stubs/stories";

export default function Stories() {
  return (
    <section className={styles.stories} id="story">
      <Container>
        <Title title="Истории путешествий" className={styles.wrapperTitle} />

        <div className={styles.list}>
          {storiesCard.map((card, index) =>
              <Card
                isCardStory
                info={card}
                width={1170}
                height={567}
                key={index}
              />
          )}
        </div>
      </Container>
    </section>
  );
}
