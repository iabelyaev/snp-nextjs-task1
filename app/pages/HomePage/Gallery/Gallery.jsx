import Image from 'next/image';
import cx from 'classnames';

import { gallery } from 'stubs/gallery';

import Title from 'components/Title';

import s from './Gallery.module.scss';

const Gallery = () => {
  return (
    <section className={s.gallery} id="#gallery">
      <div className={s.wrapper}>
        <Title className={s.wrapperTitle} title="Фотографии путешествий" />
        <div className={cx(s.list, s.list__first)}>
          {gallery.slice(0, 4).map((picture) => (
            <Image
              key={picture.title}
              src={picture.img}
              alt={picture.title}
              width={442.5}
              height={301}
            />
          ))}
        </div>
        <div className={cx(s.list, s.list__second)}>
          {gallery.slice(4, 9).map((picture) => (
            <Image
              key={picture.title}
              src={picture.img}
              alt={picture.title}
              width={349.16}
              height={301}
            />
          ))}
        </div>
        <div className={cx(s.list, s.list__three)}>
          {gallery.slice(9).map((picture) => (
            <Image
              key={picture.title}
              src={picture.img}
              alt={picture.title}
              width={442.5}
              height={301}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
