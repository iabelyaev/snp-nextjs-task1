import Link from "next/link";
import cx from 'classnames'
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from './Button.module.scss'

const Button = (props) => {
  const {
    type,
    href,
    icon,
    disabled,
    children,
    target,
    className,
    ...rest
  } = props

  return href ? (
    <Link
      className={cx(styles.button, className)}
      href={href}
      rel={target ? 'noreferrer noopener' : ''}
      {...rest}
    >
      {children}
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
    </Link>
  ) : (
    <button
      type={type}
      className={cx(styles.button, className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.any
}

export default Button;
