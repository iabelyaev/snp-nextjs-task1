'use client'
import {useState, useEffect} from "react";
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '../../utils/mock';

import styles from './header.module.scss';

export default function Header() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [isWindowScrollPosition, setIsWindowScrollPosition] = useState(0);

  function handlerScrollWindow () {
    if (typeof window !== undefined) {
      setIsWindowScrollPosition(window.scrollY)
    }
  }

  useEffect(() => {
    if (isWindowScrollPosition > 450) {
      setIsHeaderSticky(true)
    } else {
      setIsHeaderSticky(false)
    }

    window.addEventListener('scroll', handlerScrollWindow)

  }, [isWindowScrollPosition])

  function getHeaderSticky ()  {
    const cN = styles.header;

    return isHeaderSticky ? `${cN} ${styles.header__sticky}` : cN;
  }

  return (
    <header className={getHeaderSticky()}>
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
