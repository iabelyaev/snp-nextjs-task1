import NextLink from 'next/link';
import cx from 'classnames';
import { any, func, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './Link.module.scss';
const Link = ({ children, href, className, path, icon, onClick, ...rest }) => {
  return path ? (
    <NextLink
      className={cx(s.link, className)}
      href={path}
      onClick={onClick}
      {...rest}>
      {children}
    </NextLink>
  ) : (
    <a
      className={cx(s.link, className)}
      href={href}
      onClick={onClick}
      {...rest}>
      {children}
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
    </a>
  );
};

Link.propTypes = {
  href: string,
  path: string,
  className: string,
  icon: any,
  onClick: func,
};

export default Link;
