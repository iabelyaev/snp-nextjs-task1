import styles from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socials } from '../../utils/mock';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <p className={styles.footer__description}>Наши социальные сети</p>
          <ul className={styles.social__list}>
            {socials.map((item) => {
              return (
                <li key={item.name}>
                  <a href={item.link} className={styles.social__link}>
                    <FontAwesomeIcon
                      icon={[
                        item.fontawesome.prefix || 'fa',
                        item.fontawesome.name,
                      ]}
                    />
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
