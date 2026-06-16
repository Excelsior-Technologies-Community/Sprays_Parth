// src/pages/Home.jsx (or directly in App.jsx)
import Hero from '../components/Hero';
import Section2 from '../components/section/Section2';
import Slidercard from '../components/section/cardsection';
import Newsectionfun from '../components/section/Section3';
import ProductSection from '../components/ProductSection';
import Gridslide from '../components/section/Gridslide';
import Uniqper from '../components/section/uniqper';
export default function Home() {
  return (
    <>
      <Hero />
      <Section2 />
      <Slidercard />
      <Newsectionfun />
      <ProductSection />
      <Gridslide />
      <Uniqper />
      {/* You can add your Footer component here later if you want it on the homepage too! */}
    </>
  );
}