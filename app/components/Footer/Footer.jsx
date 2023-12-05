import styles from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {socials} from "stubs/socials";
import Container from "components/Container/Container";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <p className={styles.description}>Наши социальные сети</p>
          <ul className={styles.list}>
            {socials.map((item) =>
              <li key={item.name}>
                <a href={item.link} className={styles.link}>
                  <FontAwesomeIcon
                    icon={[
                      item.fontawesome.prefix || 'fa',
                      item.fontawesome.name,
                    ]}
                  />
                  {item.name}
                </a>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
