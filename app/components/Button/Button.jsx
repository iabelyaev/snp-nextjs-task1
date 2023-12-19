import cx from 'classnames';
import { any, string, node } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './Button.module.scss';

const Button = ({
  as: As,
  children,
  href,
  className,
  icon,
  target,
  ...rest
}) => {
  return (
    <As className={cx(s.link, className)} target={target} href={href} {...rest}>
      {children}
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
    </As>
  );
};

Button.propTypes = {
  href: string,
  className: string,
  icon: any,
  children: node.isRequired,
  target: string,
};

export default Button;
