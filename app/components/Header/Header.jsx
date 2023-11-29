import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '../../utils/mock';

import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <a href="/">
            <Image
              className={styles.header__logo}
              src="/images/logotype.svg"
              width={182}
              height={31}
              alt="Логотип сайта."
            />
          </a>
          <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
              {navLinks.map((link) => {
                return (
                  <li key={link.text}>
                    <Link className={styles.header__link} href={link.path}>
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <a className={styles.header__link} href="tel:+79999999999">
            +7 999 999 99 99
          </a>
        </div>
      </div>
    </header>
  );
}
