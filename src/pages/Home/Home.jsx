import React from 'react'

import HeroSection from './HeroSection/HeroSection';
import InfiniteLogoScroller from './InfiniteLogoScroller/InfiniteLogoScroller';
import FeaturedProperties from './FeaturedProperties/FeaturedProperties';
import Recommendations from './Recommendations/Recommendations';
import PropertiesOnSale from './PropertiesOnSale/PropertiesOnSale';

const Home = () => {
  return (
    <main className='w-full z-1 mb-20'>
      <HeroSection />
      <section className='my-10 w-[80%] flex flex-col  justify-self-center gap-20' >

      <FeaturedProperties />

      <InfiniteLogoScroller />

      <Recommendations />

      <PropertiesOnSale />

      </section>
    </main>
  )
}

export default Home
     