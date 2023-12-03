import Card from 'components/Card/Card';
import Title from 'components/Title/Title';
import styles from './stories.module.scss';
import cardStyle from './stories-card.module.scss';

import { storiesCard } from '../../../utils/mock';
export default function Stories() {
  return (
    <section className={styles.stories} id="story">
      <div className="container">
        <Title title="Истории путешествий" cN={styles.stories__wrapper_title} />

        <div className={styles.stories__list}>
          {storiesCard.map((card, index) => {
            return (
              <Card
                info={card}
                width={1170}
                height={567}
                key={index}
                cN={cardStyle}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
