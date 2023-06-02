import React from 'react';
import Hero from '../layouts/home/HeroSection';
import Post from '../layouts/home/PostSection';
import Recommended from '../layouts/home/RecommendedSection';

export default function Home() {
  /*Landing page setup*/
  return (
    <div className='Home font-space'>
      <Hero />
      <Post />
      <Recommended />
    </div>
  );
}
