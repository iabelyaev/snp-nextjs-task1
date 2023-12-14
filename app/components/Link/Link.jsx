import NextLink from 'next/link';
import cx from 'classnames';
import { any, func, string, node } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './Link.module.scss';
const Link = ({
  children,
  href,
  className,
  icon,
  onClick,
  disabled,
  target,
  type,
  ...rest
}) => {
  const isExternalRegExp = /^http|https/;
  return href ? (
    isExternalRegExp.test(href) ? (
      <a
        className={cx(s.link, className)}
        rel={target ? 'noreferrer noopener' : ''}
        target={target}
        href={href}
        {...rest}>
        {children}
        {icon ? <FontAwesomeIcon icon={icon} /> : null}
      </a>
    ) : (
      <NextLink className={cx(s.link, className)} href={href} {...rest}>
        {children}
        {icon ? <FontAwesomeIcon icon={icon} /> : null}
      </NextLink>
    )
  ) : (
    <button
      className={cx(s.link, className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}>
      {children}
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
    </button>
  );
};

Link.propTypes = {
  href: string,
  className: string,
  icon: any,
  onClick: func,
  type: string,
  children: node.isRequired,
  target: string,
};

export default Link;
