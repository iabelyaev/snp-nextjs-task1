import Link from "next/link";
import {string, any} from "prop-types";
import cx from 'classnames'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import s from './Button.module.scss'

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
      className={cx(s.button, className)}
      href={href}
      {...rest}
    >
      {children}
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
    </Link>
  )
}

Button.propTypes = {
  type: string,
  href: string,
  className: string,
  icon: any
}

export default Button;
