import Link from "next/link";
import PropTypes from "prop-types";
import cx from 'classnames'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from './Button.module.scss'

const Button = (props) => {
  const {
    type,
    href,
    icon,
    children,
    className,
    ...rest
  } = props

  return (
    <Link
      className={cx(styles.button, className)}
      href={href}
      {...rest}
    >
      {children}
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
    </Link>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.any
}

export default Button;
