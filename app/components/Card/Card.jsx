import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './card.module.scss';
import cx from "classnames";
export default function Card({ info, width, classNames, height, path = '/', isCardChoose, isCardStory,}) {
  return (
    <article className={cx(styles.card,
      {[styles.cardChoose]: isCardChoose,
      [styles.cardStory]: isCardStory})
    }
    >
      <div className={cx(styles.text,
        {[styles.cardText]: isCardStory})
      }
      >
        <h3 className={cx(styles.title, {[styles.titleChoose]: isCardChoose,
          [styles.titleStory]: isCardStory})}>
          {info.title}
        </h3>
        <p className={cx(styles.description, {[styles.descriptionChoose]: isCardChoose,
          [styles.descriptionStory]: isCardStory})}
        >
          {info.price ? 'от 80 000 руб' : info.description}
        </p>
      </div>
      <Image
        className={styles.image}
        src={info.img}
        loading="lazy"
        alt=""
        width={width}
        height={height}
      />
      <div className={styles.footer}>
        <Link className={styles.link} href={path}>
          Подробнее
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>

        {info.social && (
          <div className={styles.social}>
            {info.social.map((item) => {
              return (
                <a
                  key={item.name}
                  className={styles.social_link}
                  href={item.link}
                  target="_blank">
                  {item.name}
                </a>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles.overlay}></div>
    </article>
  );
}
