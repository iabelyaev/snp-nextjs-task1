'use client';
import { useState } from 'react';

import {chooseCards} from "stubs/choose";

import Card from 'components/Card/Card';
import Container from "components/Container/Container";

import styles from './Choose-tour.module.scss';

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
    const cN = styles.tab;
    return activeTab === category
      ? `${cN} ${styles.tab__active}`
      : cN;
 }

  return (
    <section className={styles.choose_tour} id='choosetour'>
      <Container>
        <div className={styles.wrapperTitle}>
          <h2 className={styles.title}>Выбери свой тур</h2>
        </div>

        <div className={styles.tabs}>
          {tabs.map((item) =>
              <button
                key={item.category}
                className={getActiveTab(item.category)}
                type="button"
                onClick={() => setActiveTab(item.category)}>
                {item.title}
              </button>
          )}
        </div>

        <ul className={styles.list}>
          {chooseCards.map((item, index) =>
              <li key={index}>
                <Card
                  isCardChoose
                  info={item}
                  width={370}
                  height={531}
                  key={index}
                />
              </li>
          )}
        </ul>
      </Container>
    </section>
  );
}

export default ChooseTour;
