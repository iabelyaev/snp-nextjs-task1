import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {socials} from "stubs/socials";

import Container from 'components/Container';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.wrapper}>
          <p className={s.description}>Наши социальные сети</p>

          <ul className={s.list}>
            {socials.map((item) =>
              <li key={item.name}>
                <a href={item.link} className={s.link}>
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

export default Footer;
