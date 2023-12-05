import PropTypes from "prop-types";
import styles from './Container.module.scss'

function Container({children}) {
  return <div className={styles.container}>{children}</div>
}

// Container.propTypes = {
//   children: PropTypes.object
// }

export default Container;
