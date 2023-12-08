import { node } from "prop-types";

import s from './Container.module.scss'

const Container = ({ children }) => <div className={s.container}>{children}</div>


Container.propTypes = {
  children: node.isRequired
}

export default Container;
