import Image from 'next/image';
import PropTypes from "prop-types";
import cx from "classnames";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Button from "components/Button/Button";

import styles from './card.module.scss';

const Card = (
  { info,
    width,
    height,
    path = '/',
    isCardChoose,
    isCardStory
  }) => {
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
        <Button href={path} icon={faArrowRight}>
          Подробнее
        </Button>

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

Card.propTypes = {
  info: PropTypes.object,
  width: PropTypes.node,
  height: PropTypes.node,
  path: PropTypes.string,
  isCardChoose: PropTypes.bool,
  isCardStory: PropTypes.bool
}

export default Card;
