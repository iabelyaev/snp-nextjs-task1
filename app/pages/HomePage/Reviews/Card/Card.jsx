import Image from 'next/image';
import { string, any } from 'prop-types';

import styles from './Card.module.scss';

const Card = ({text, author, title, img}) => {
  return (
    <article className={styles.card}>
      <p className={styles.reviewsText}>{text}</p>
      <div className={styles.reviewsFooter}>
        <h3>{author}</h3>
        <p>Тур:{title}</p>
        <Image
          src={img}
          alt={author}
          width={75}
          height={75}
        />
      </div>
    </article>
  )
}

Card.propTypes = {
  text: string,
  title: string,
  img: any,
  author: string
}

export default Card
