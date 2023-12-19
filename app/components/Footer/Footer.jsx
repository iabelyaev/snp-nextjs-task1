import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { socials } from 'stubs/socials';

import Container from 'components/Container';
import Button from 'components/Button';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.wrapper}>
          <p className={s.description}>Наши социальные сети</p>

          <ul className={s.list}>
            {socials.map((item) => (
              <li key={item.name}>
                <Button
                  as={'a'}
                  href={item.link}
                  className={s.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={[
                      item.fontawesome.prefix || 'fa',
                      item.fontawesome.name,
                    ]}
                  />
                  {item.name}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
