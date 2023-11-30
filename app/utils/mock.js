export const navLinks = [
  {
    text: 'Туры',
    path: '/',
  },
  {
    text: 'Создать тур',
    path: '/',
  },
  {
    text: 'Отзывы',
    path: '/',
  },
  {
    text: 'Истории',
    path: '/',
  },
];

const chooseCardPath = '/images/choosetour';
export const chooseCards = [
  {
    title: 'Путешествие в горы',
    description: 'от 80 000 руб',
    name: 'bus',
    img: `${chooseCardPath}/card-tour-photo-1.jpg`,
  },
  {
    title: 'Путешествие в горы',
    price: 'от 80 000 руб',
    name: 'desert',
    img: `${chooseCardPath}/card-tour-photo-2.jpg`,
  },
  {
    title: 'Путешествие в горы',
    price: 'от 80 000 руб',
    name: 'hills',
    img: `${chooseCardPath}/card-tour-photo-3.jpg`,
  },
  {
    title: 'Путешествие в горы',
    price: 'от 80 000 руб',
    name: 'city',
    img: `${chooseCardPath}/card-tour-photo-4.jpg`,
  },
  {
    title: 'Путешествие в горы',
    price: 'от 80 000 руб',
    name: 'beach',
    img: `${chooseCardPath}/card-tour-photo-5.jpg`,
  },
  {
    title: 'Путешествие в горы',
    price: 'от 80 000 руб',
    name: 'lake',
    img: `${chooseCardPath}/card-tour-photo-6.jpg`,
  },
];

export const reviewCards = [
  {
    text:
      'Идейные соображения высшего порядка, ' +
      'а также рамки и место обучения кадров ' +
      'обеспечивает широкому кругу (специалистов) ' +
      'участие в формировании новых предложений. ' +
      'Идейные соображения высшего порядка, а ' +
      'также начало повседневной работы по ' +
      'формированию позиции позволяет оценить ' +
      'значение модели развития.',
    userInfo: {
      author: 'Мария',
      titleTour: 'Вдали от дома',
      img: '/images/review-photo-1.jpg',
    },
  },
  {
    text:
      'Равным образом постоянный ' +
      'количественный рост и сфера нашей ' +
      'активности играет важную роль в ' +
      'формировании системы обучения кадров, ' +
      'соответствует насущным потребностям.' +
      '\n' +
      '\n' +
      'Значимость этих проблем настолько очевидна, ' +
      'что дальнейшее развитие различных форм ' +
      'деятельности обеспечивает широкому кругу ' +
      '(специалистов) участие в формировании новых ' +
      'предложений. Повседневная практика показывает, ' +
      'что реализация намеченных плановых заданий в ' +
      'значительной степени обуславливает ' +
      'создание модели развития.',
    userInfo: {
      author: 'Павел',
      titleTour: 'Путешествие в горы',
      img: '/images/review-photo-2.jpg',
    },
  },
];
