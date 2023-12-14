import { node, element } from 'prop-types';

import s from './Container.module.scss';

const Container = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

Container.propTypes = {
  children: node.isRequired,
};

export default Container;
