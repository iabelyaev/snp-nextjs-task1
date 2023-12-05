'use client';
import InputMask from 'react-input-mask';
import styles from './input.module.scss';
export default function Input(props) {
  const { title, ...rest } = props;


  return (
    <label className={styles.input}>
      <span>{title}</span>
      <InputMask className={styles.filed} required {...rest} />
    </label>
  );
}
