import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './card.module.scss';
export default function Card({ info, cN, width, height, path = '/' }) {
  return (
    <article className={`${cN.card} ${styles.card}`}>
      <div className={`${cN.card__text} ${styles.card__text}`}>
        <h3 className={`${cN.title} ${styles.card__title}`}>{info.title}</h3>
        <p className={`${cN.description} ${styles.card__description}`}>
          {info.price ? 'от 80 000 руб' : info.description}
        </p>
      </div>
      <Image
        className={styles.card__image}
        src={info.img}
        loading="lazy"
        alt=""
        width={width}
        height={height}
      />
      <div className={styles.card__footer}>
        <Link className={styles.card__link} href={path}>
          Подробнее
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>

        {info.social && (
          <div className={styles.card__social}>
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
      <div className={styles.card__overlay}></div>
    </article>
  );
}
