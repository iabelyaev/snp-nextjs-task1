import styles from './form.module.scss';
import Title from 'components/Title/Title';
import Input from 'components/Input/Input';
export default function Form() {
  return (
    <section className={styles.form_block} id="form">
      <div className="container">
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
          <fieldset className={styles.form__faq}>
            <legend className={styles.form__legend}>Вам есть 18 лет?</legend>
            <div className={styles.form__radiobox}>
              <label className={styles.form__item}>
                <input
                  className={`${styles.form__control} ${'visually_hidden'}`}
                  type="radio"
                  name="type"
                  required
                />
                <span></span>
                <span className={styles.form__control_title}>Да</span>
              </label>
              <label className={styles.form__item}>
                <input
                  className={`${styles.form__control} ${'visually_hidden'}`}
                  type="radio"
                  name="type"
                  required
                />
                <span></span>
                <span className={styles.form__control_title}>Нет</span>
              </label>
            </div>
          </fieldset>
          <fieldset className={styles.form__faq}>
            <label
              className={`${styles.form__item} ${styles.form__item_check}`}>
              <input
                className={`${styles.form__control} ${'visually_hidden'}`}
                type="checkbox"
                name="yes"
                required
              />
              <span></span>
              <span className={styles.form__checkbox_text}>
                Нажимая кнопку, я принимаю условия{' '}
                <a href="/">Лицензионного договора</a>
              </span>
            </label>
          </fieldset>
          <div className={styles.form_buttons}>
            <button
              className={`${styles.form_button} ${styles.form_button__primary}`}
              type="submit">
              Найти тур
            </button>
            <button
              className={`${styles.form_button} ${styles.form_button__secondary}`}
              type="reset">
              Сбросить
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
