import {string, bool} from "prop-types";

import s from './Title.module.scss';

const Title = ({ title, isWrap, className }) =>
    <div className={`${s.wrapper} ${className ? className : ''}`}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.subtitle}>
        Идейные соображения высшего порядка, {isWrap ? '\na' : 'a\n'} также
        рамки и место обучения кадров
      </p>
    </div>

Title.propTypes = {
  title: string,
  isWrap: bool,
  className: string
}

export default Title;
