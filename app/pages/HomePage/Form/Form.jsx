import styles from './form.module.scss';
import Title from 'components/Title/Title';
export default function Form() {
  return (
    <section className={styles.form_block}>
      <div className="container">
        <Title title="Собери свой тур" isWrap />
      </div>
    </section>
  );
}
