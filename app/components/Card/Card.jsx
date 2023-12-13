import Image from 'next/image';
import { shape, string, node, objectOf } from 'prop-types';
import cx from 'classnames';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Link from 'components/Link';

import s from './Card.module.scss';

const Card = ({ info, className, width, height, path = '/' }) => {
  return (
    <article className={cx(s.card, className)}>
      <div className={cx(s.text)}>
        <h3 className={cx(s.title)}>{info.title}</h3>
        <p className={cx(s.description)}>
          {info.price ? 'от 80 000 руб' : info.description}
        </p>
      </div>
      <Image
        className={s.image}
        src={info.img}
        loading="lazy"
        alt={info.title}
        width={width}
        height={height}
      />
      <div className={s.footer}>
        <Link href={path} className={s.link} icon={faArrowRight}>
          Подробнее
        </Link>

        {info.social && (
          <div className={s.social}>
            {info.social.map((item) => (
              <Link
                key={item.name}
                className={s.social_link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer">
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className={s.overlay}></div>
    </article>
  );
};

Card.propTypes = {
  info: shape({
    title: string,
    description: string,
    name: string,
    img: string,
    socials: objectOf(string),
  }),
  width: node,
  height: node,
  path: string,
  className: string,
};

export default Card;
