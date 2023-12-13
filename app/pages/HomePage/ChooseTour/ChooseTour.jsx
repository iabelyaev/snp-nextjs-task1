'use client';

import { useState } from 'react';
import cx from 'classnames';

import { chooseCards } from 'stubs/choose';
import { tabs } from 'stubs/tabs';

import Card from 'components/Card';
import Container from 'components/Container';

import s from './Choose-tour.module.scss';

const ChooseTour = () => {
  const [activeTab, setActiveTab] = useState('popular');

  const toggleTabs = (category) => {
    setActiveTab(category);
  };

  return (
    <section className={s.choose_tour} id="choosetour">
      <Container>
        <div className={s.wrapperTitle}>
          <h2 className={s.title}>Выбери свой тур</h2>
        </div>

        <div className={s.tabs}>
          {tabs.map((btn) => (
            <button
              key={btn.category}
              className={cx(s.tab, {
                [s.tab__active]: activeTab === btn.category,
              })}
              type="button"
              onClick={() => toggleTabs(btn.category)}>
              {btn.title}
            </button>
          ))}
        </div>

        <ul className={s.list}>
          {chooseCards.map((item, index) => (
            <li key={index}>
              <Card
                info={item}
                key={index}
                className={s.card}
                width={370}
                height={531}
                isCardChoose
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ChooseTour;
