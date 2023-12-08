import Image from 'next/image';
import cx from 'classnames'

import {gallery} from "stubs/gallery";

import Title from 'components/Title';

import styles from './Gallery.module.scss';

const Gallery = () => {
  return (
    <section className={styles.gallery} id='#gallery'>
      <div className={styles.gallery__wrapper}>
        <Title
          className={styles.gallery__wrapper_title}
          title="Фотографии путешествий"
        />
        <div
          className={cx(styles.gallery__list, styles.gallery__list__first)}>
          {gallery.slice(0,4).map((picture) =>
            <Image
              key={picture.title}
              src={picture.img}
              alt={picture.title}
              width={442.5}
              height={301}
            />
          )}
        </div>
        <div
          className={cx(styles.gallery__list, styles.gallery__list__second)}>
          {gallery.slice(4, 9).map((picture) =>
              <Image
                key={picture.title}
                src={picture.img}
                alt={picture.title}
                width={349.16}
                height={301}
              />
            )}
        </div>
        <div
          className={cx(styles.gallery__list, styles.gallery__list__three)}>
          {gallery.slice(9).map((picture) =>
            <Image
              key={picture.title}
              src={picture.img}
              alt={picture.title}
              width={442.5}
              height={301}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
