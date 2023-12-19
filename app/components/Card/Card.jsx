import Image from 'next/image';
import { shape, string, node, objectOf } from 'prop-types';
import cx from 'classnames';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Button from 'components/Button';

import s from './Card.module.scss';

const Card = ({ info, className, width, height, path = '/' }) => {
  return (
    <article className={cx(s.card, className)}>
      <div className={s.text}>
        <h3 className={s.title}>{info.title}</h3>
        <p className={s.description}>
          {info.price ? 'от 80 000 руб' : info.description}
        </p>
      </div>
      <Image
        className={s.image}
        src={info.img}
        alt={info.title}
        width={width}
        height={height}
      />
      <div className={s.footer}>
        <Button as={'a'} href={path} className={s.link} icon={faArrowRight}>
          Подробнее
        </Button>

        {info.social && (
          <div className={s.social}>
            {info.social.map((item) => (
              <Button
                as={'a'}
                key={item.name}
                className={s.social_link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer">
                {item.name}
              </Button>
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
