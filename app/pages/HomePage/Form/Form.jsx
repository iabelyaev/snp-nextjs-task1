import cx from 'classnames'

import Container from "components/Container/Container";
import Title from 'components/Title/Title';
import Input from 'components/Input/Input';

import styles from './form.module.scss';
function Form() {
  return (
    <section className={styles.form_block} id="form">
      <Container>

        <Title title="Собери свой тур" isWrap />

        <form
          className={styles.form}
          action="https://echo.htmlacademy.ru/"
          method="post"
          id="form">
          <div className={styles.form__list}>
            <Input
              title="Имя"
              type="text"
              placeholder="Введите Ваше имя"
              name="name"
            />
            <label className={styles.form__label}>
              <span>Направление</span>
              <div className={styles.form__label_select}>
                <select
                  className={`${styles.form__field} ${styles.form__select}`}
                  required
                  defaultValue="">
                  <option disabled value="" hidden>
                    Куда хотите ехать
                  </option>
                  <option value="Амстердам">Амстердам</option>
                  <option value="Лондон">Лондон</option>
                  <option value="Лиссабон">Лиссабон</option>
                </select>
              </div>
            </label>
            <Input
              title="Email"
              type="email"
              placeholder="example@mail.com"
              name="email"
            />
            <Input
              title="Телефон"
              type="tel"
              placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
              name="phone"
              mask="+ 7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9"
            />
            <Input
              title="Дата от"
              type="text"
              name="arrival-date"
              mask="99.99.9999"
              placeholder="ДД.ММ.ГГГГ"
            />
            <Input
              title="Дата до"
              type="text"
              name="departure-date"
              mask="99.99.9999"
              placeholder="ДД.ММ.ГГГГ"
            />
          </div>
          <div className={styles.form__comment}>
            <label className={styles.form__label}>
              <span>Комментарий</span>
              <textarea
                className={`${styles.form__field} ${styles.form__textarea}`}
              />
            </label>
          </div>
          <fieldset className={styles.faq}>
            <legend className={styles.legend}>Вам есть 18 лет?</legend>
            <div className={styles.radiobox}>
              <label className={styles.item}>
                <input
                  className={cx(styles.control, 'visually_hidden')}
                  type="radio"
                  name="type"
                  required
                />
                <span></span>
                <span className={styles.controlTitle}>Да</span>
              </label>
              <label className={styles.item}>
                <input
                  className={cx(styles.control, 'visually_hidden')}
                  type="radio"
                  name="type"
                  required
                />
                <span></span>
                <span className={styles.controlTitle}>Нет</span>
              </label>
            </div>
          </fieldset>
          <fieldset className={styles.faq}>
            <label
              className={cx(styles.item, {[styles.item_checkbox]: true})}>
              <input
                className={cx(styles.control, 'visually_hidden')}
                type="checkbox"
                name="yes"
                required
              />
              <span></span>
              <span className={styles.checkboxText}>
                Нажимая кнопку, я принимаю условия{' '}
                <a href="/">Лицензионного договора</a>
              </span>
            </label>
          </fieldset>
          <div className={styles.buttons}>
            <button
              className={cx(styles.button, {[styles.primary]: true})}
              type="submit">
              Найти тур
            </button>
            <button
              className={cx(styles.button, {[styles.secondary]: true})}
              type="reset">
              Сбросить
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}

export default Form;
