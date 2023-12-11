import cx from 'classnames';

import Container from 'components/Container';
import Title from 'components/Title';
import Input from 'components/Input';

import s from './Form.module.scss';

const Form = () => {
  return (
    <section className={s.form_block} id="form">
      <Container>
        <Title title="Собери свой тур" isWrap />

        <form
          className={s.form}
          action="https://echo.htmlacademy.ru/"
          method="post"
          id="form">
          <div className={s.form__list}>
            <Input
              title="Имя"
              type="text"
              placeholder="Введите Ваше имя"
              name="name"
            />
            <label className={s.form__label}>
              <span>Направление</span>
              <div className={s.form__label_select}>
                <select
                  className={cx(s.form__field, s.form__select)}
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
          <div className={s.form__comment}>
            <label className={s.form__label}>
              <span>Комментарий</span>
              <textarea className={cx(s.form__field, s.form__textarea)} />
            </label>
          </div>
          <fieldset className={s.faq}>
            <legend className={s.legend}>Вам есть 18 лет?</legend>
            <div className={s.radiobox}>
              <label className={s.item}>
                <input
                  className={cx(s.control, 'visually_hidden')}
                  type="radio"
                  name="type"
                  required
                />
                <span></span>
                <span className={s.controlTitle}>Да</span>
              </label>
              <label className={s.item}>
                <input
                  className={cx(s.control, 'visually_hidden')}
                  type="radio"
                  name="type"
                  required
                />
                <span></span>
                <span className={s.controlTitle}>Нет</span>
              </label>
            </div>
          </fieldset>
          <fieldset className={s.faq}>
            <label className={cx(s.item, { [s.item_checkbox]: true })}>
              <input
                className={cx(s.control, 'visually_hidden')}
                type="checkbox"
                name="yes"
                required
              />
              <span></span>
              <span className={s.checkboxText}>
                Нажимая кнопку, я принимаю условия{' '}
                <a href="/">Лицензионного договора</a>
              </span>
            </label>
          </fieldset>
          <div className={s.buttons}>
            <button
              className={cx(s.button, { [s.primary]: true })}
              type="submit">
              Найти тур
            </button>
            <button
              className={cx(s.button, { [s.secondary]: true })}
              type="reset">
              Сбросить
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Form;
