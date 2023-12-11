'use client';

import { useState } from 'react';

import { chooseCards } from 'stubs/choose';

import Card from 'components/Card';
import Container from 'components/Container';

import s from './Choose-tour.module.scss';

const ChooseTour = () => {
  const [activeTab, setActiveTab] = useState('popular');

  const tabs = [
    {
      title: 'Популярные',
      category: 'popular',
    },
    {
      title: 'Авторские',
      category: 'copyright',
    },
    {
      title: 'Походы',
      category: 'hiking',
    },
    {
      title: 'Сплавы',
      category: 'alloys',
    },
    {
      title: 'Велопрогулки',
      category: 'cyclingTrips',
    },
  ];

  const getActiveTab = (category) => {
    const cN = s.tab;
    return activeTab === category ? `${cN} ${s.tab__active}` : cN;
  };

  return (
    <section className={s.choose_tour} id="choosetour">
      <Container>
        <div className={s.wrapperTitle}>
          <h2 className={s.title}>Выбери свой тур</h2>
        </div>

        <div className={s.tabs}>
          {tabs.map((item) => (
            <button
              key={item.category}
              className={getActiveTab(item.category)}
              type="button"
              onClick={() => setActiveTab(item.category)}>
              {item.title}
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
