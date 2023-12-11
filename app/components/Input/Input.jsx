'use client';

import InputMask from 'react-input-mask';
import { string } from "prop-types";

import s from './Input.module.scss';

const Input = (props) => {
  const { title, ...rest } = props;

  return (
    <label className={s.input}>
      <span>{title}</span>
      <InputMask className={s.filed} required {...rest} />
    </label>
  );
}

Input.propTypes = {
  title: string
}

export default Input;
