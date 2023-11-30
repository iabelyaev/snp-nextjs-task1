import Hero from './Hero/Hero';
import ChooseTour from './ChooseTour/ChooseTour';
import Form from './Form/Form';
import Reviews from './Reviews/Reviews';
import Gallery from './Gallery/Gallery';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChooseTour />
      <Form />
      <Reviews />
      <Gallery />
    </>
  );
}
