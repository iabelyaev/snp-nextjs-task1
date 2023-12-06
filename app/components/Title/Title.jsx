import PropTypes from "prop-types";

import styles from './Title.module.scss';

const Title = ({ title, isWrap, className }) => {
  return (
    <div className={`${styles.wrapper} ${className ? className : ''}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>
        Идейные соображения высшего порядка, {isWrap ? '\na' : 'a\n'} также
        рамки и место обучения кадров
      </p>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  isWrap: PropTypes.bool,
  className: PropTypes.string
}

export default Title;
