import Image from 'next/image';
import Title from 'components/Title/Title';
import styles from './gallery.module.scss';

import { galleryPhotos } from '../../../utils/mock';
export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__wrapper}>
        <Title
          cN={styles.gallery__wrapper_title}
          title="Фотографии путешествий"
        />
        <div
          className={`${styles.gallery__list} ${styles.gallery__list__first}`}>
          {galleryPhotos
            .map((picture) => {
              return (
                <Image
                  key={picture.title}
                  src={picture.img}
                  alt={picture.title}
                  width={442.5}
                  height={301}
                />
              );
            })
            .slice(0, 4)}
        </div>
        <div
          className={`${styles.gallery__list} ${styles.gallery__list__second}`}>
          {galleryPhotos
            .map((picture) => {
              return (
                <Image
                  key={picture.title}
                  src={picture.img}
                  alt={picture.title}
                  width={349.16}
                  height={301}
                />
              );
            })
            .slice(4, 9)}
        </div>
        <div
          className={`${styles.gallery__list} ${styles.gallery__list__three}`}>
          {galleryPhotos
            .map((picture) => {
              return (
                <Image
                  key={picture.title}
                  src={picture.img}
                  alt={picture.title}
                  width={442.5}
                  height={301}
                />
              );
            })
            .slice(9, 13)}
        </div>
      </div>
    </section>
  );
}
