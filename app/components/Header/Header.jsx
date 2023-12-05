'use client'
import {useState, useEffect} from "react";
import cx from 'classnames'
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '../../utils/mock';

import styles from './header.module.scss';

export default function Header() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [isWindowScrollPosition, setIsWindowScrollPosition] = useState(0);

  function handlerScrollWindow () {
    setIsWindowScrollPosition(window.scrollY)
  }

  useEffect(() => {
    if (isWindowScrollPosition > 450) {
      setIsHeaderSticky(true)
    } else {
      setIsHeaderSticky(false)
    }

    window.addEventListener('scroll', handlerScrollWindow)


    return () => {
      window.removeEventListener('scroll', handlerScrollWindow)
    }

  }, [isWindowScrollPosition])



  return (
    <header className={cx(styles.header, {[styles.sticky]: isHeaderSticky})}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <a href="/">
            <Image
              className={styles.logo}
              src="/images/logotype.svg"
              width={182}
              height={31}
              alt="Логотип сайта."
            />
          </a>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {navLinks.map((link) =>
                  <li key={link.text}>
                    <Link className={styles.link} href={link.path}>
                      {link.text}
                    </Link>
                  </li>
              )}
            </ul>
          </nav>
          <a className={styles.link} href="tel:+79999999999">
            +7 999 999 99 99
          </a>
        </div>
      </div>
    </header>
  );
}
