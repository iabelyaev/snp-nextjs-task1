'use client';
import { useState } from 'react';
import Card from 'components/Card/Card';
import { chooseCards } from '../../../utils/mock';

import styles from './choose-tour.module.scss';
import cardStyles from './choose-tour-card.module.scss';
export default function ChooseTour() {
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
  function getActiveTab(category) {
    const cN = styles.choose_tour__tab;
    return activeTab === category
      ? `${cN} ${styles.choose_tour__tab__active}`
      : cN;
  }

  return (
    <section className={styles.choose_tour} id='choosetour'>
      <div className="container">
        <div className={styles.choose_tour__wrapper_title}>
          <h2 className={styles.choose_tour__title}>Выбери свой тур</h2>
        </div>
        <div className={styles.choose_tour__tabs}>
          {tabs.map((item) => {
            return (
              <button
                key={item.category}
                className={getActiveTab(item.category)}
                type="button"
                onClick={() => setActiveTab(item.category)}>
                {item.title}
              </button>
            );
          })}
        </div>

        <ul className={styles.choose_tour__list}>
          {chooseCards.map((item, index) => {
            return (
              <li key={index}>
                <Card
                  info={item}
                  width={370}
                  height={531}
                  key={index}
                  cN={cardStyles}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
