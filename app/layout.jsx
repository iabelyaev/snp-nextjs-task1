import { roboto } from './fonts';
import Header from './components/Header/Header';

import 'styles/globals.scss';

export const metadata = {
  title: 'YourTour',
  description: 'Сhoose your tour',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <div className="page-layout">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
